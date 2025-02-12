const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const generatePDF = async (export_data) => {
    try {

        const templatePath = path.join(__dirname, '../template/template.html');
        let html = fs.readFileSync(templatePath, 'utf8');

        const applicant = export_data ? export_data : {};

        console.log("This is applicant:", applicant);

        const imagePath = applicant.photo_path ? path.join(__dirname, '../', applicant.photo_path) : null;
        const imageBase64 = imagePath ? fs.readFileSync(imagePath, { encoding: 'base64' }) : null;
        const imageSrc = imageBase64 ? `data:image/jpeg;base64,${imageBase64}` : '';

        const signaturePath = applicant.generals.length > 0 && applicant.generals[0].signature_path 
            ? path.join(__dirname, '../', applicant.generals[0].signature_path) 
            : null;
        const signatureBase64 = signaturePath ? fs.readFileSync(signaturePath, { encoding: 'base64' }) : null;
        const signatureSrc = signatureBase64 ? `data:image/jpeg;base64,${signatureBase64}` : '';
        

const emergency_family_TableRows = applicant.family_particulars.slice(0,1).map(family => `
    <tr>
        <td rowspan="5" style="vertical-align:top;" width="100">Next of Kin</td>
        <th width="100">Name</th>
        <td width="200">${family.emergency_name}</td>
        <th width="100">Relationship</th>
        <td colspan="2">${family.emergency_relationship}</td>
    </tr>
    <tr>
        <th>Address</th>
        <td colspan="4">${family.emergency_address}</td>
        
        
    </tr>
    <tr>
        <th>Telephone No.</th>
        <td>${family.emergency_tel}</td>
        <th>Email</th>
        <td colspan="2">${family.emergency_email}</td>
        
    </tr>
`).join("");

const family_Table_Rows = applicant.family_particulars.slice(1).map(family => `
    <tr>
        <td width="75">${family.family_member}</td>
        <td width="150">${family.family_member_name}</td>
        <td width="50">${family.sex}</td>
        <td width="150">${family.family_date_of_birth}</td>
        <td width="70">${family.passport_number}</td>
        <td>${family.ECNR}</td>
        <td width="150">${family.date_issued} / ${family.place_issued}</td>
    </tr>
`).join("");

const education_Table_Rows = applicant.education_backgrounds.map(education => `
    <tr>
        <td>${education.school_name}</td>
        <td>${education.from_date}</td>
        <td>${education.to_date}</td>
        <td>${education.percentage}</td>
        <td>${education.position_degree_diploma}</td>
    </tr>
`).join("");

const pre_sea_education_Table_Rows = applicant.pre_sea_educations.map(education => `
<tr>
   <th width="170">Pre-Sea Training Institute</th>
   <td colspan="3">${education.institute_name}</td>
</tr>
<tr>
   <th>Date commenced</th>
   <td width="150">${education.pre_sea_from_date}</td>
   <th width="150">Date Completed</th>
   <td>${education.pre_sea_to_date}</td>
</tr>
<tr>
   <th>Degree Diploma Certificate</th>
   <td>${education.course}</td>
   <th>Class Obtained</th>
   <td>${education.class_obtained}</</td>
   
</tr>
 <tr>
   <th>Name of Workshop</th>
   <td>${education.name_of_workshop}</td>   
</tr>
<tr>
    <td colspan="4">&nbsp;</td> 
</tr>

`).join("");

const documents_Table_Rows = applicant.identity_documents.map(documents => `
<tr>
    <td width="100">${documents.document_type}</td>
    <td >${documents.document_country}</td>
    <td >${documents.document_number}</td>
    <td >${documents.document_from_date}</td>
    <td >${documents.document_to_date}</td>
    <td>${documents.document_Place_issued}</td>
</tr>
`).join("");

const visa_general_Table_Rows = applicant.generals.slice(0,1).map(visa => `
   <td>${visa.visa_rejection}</td>
`).join("");

const certificate_Table_Rows = applicant.certificates.map(certificate => `
<tr>
   <td >${certificate.highest_certificate}</td>
   <td >${certificate.highest_certificate_grade}</td>
   <td >${certificate.highest_certificate_issue_country}</td>
   <td >${certificate.highest_certificate_number}</td>
   <td >${certificate.highest_certificate_from_date}</td>
   <td >${certificate.highest_certificate_place_issued}</td>
   <td >${certificate.highest_certificate_to_date}</td>
</tr>
 `).join("");

const hkcertificate_Table_Rows = applicant.hong_kong_certificates.map(certificate => `
<tr>
<tr>
   <td >${certificate.hong_kong_certificate}</td>
   <td >${certificate.hong_kong_certificate_number}</td>
   <td >${certificate.hong_kong_certificate_from_date}</td>
   <td >${certificate.hong_kong_certificate_place_issued}</td>
   <td >${certificate.hong_kong_certificate_to_date}</td>
</tr>
</tr>
 `).join("");

const course_certificate_Table_Rows = applicant.course_certificates.map(certificate => `
<tr>
<tr>
   <td >${certificate.attended_course}</td>
   <td >${certificate.attended_course_institute}</td>
   <td >${certificate.attended_course_certificate_number}</td>
   <td >${certificate.attended_course_from_date}</td>
   <td >${certificate.attended_course_to_date}</td>
</tr>
</tr>
 `).join("");

const familiar_apps_Table_Rows = applicant.generals.slice(0,1).map(general => `
    <tr>
        <td >Application Familier (Word, Excel, etc.)</td>
        <td >${general.familiar_applications}</td>
    </tr>
    <tr>
        <td >Pleaned Maintanance System (PMS)</td>
        <td >${general.PMS}</td>
    </tr>
    <tr>
        <td >Training Undergone for AMOS4W</td>
        <td >${general.AMOS4W}</td>
    </tr>

    <tr>
        <td >ISPS Course</td>
        <td >${general.ISPS}</td>
    </tr>
    <tr>
        <td >SSO Course (Maritime Administration Approved)</td>
        <td >${general.SSO}</td>
    </tr>

    <table>
        <p>If the answer is "Yes" to any of above, then give full details here under and attach a separate page, if necessary </p>
        <tr>
            <td>${general.explain_familiarity}</td>
        </tr>
    </table>

 `).join("");

const accident_general_Table_Rows = applicant.generals.slice(0,1).map(general => `
<tr>
   <td width="500" >Have you ever been involved in a court of enquiry or maritime accident?</td>
   <td >${general.court_inquiry}</td>
</tr>
<tr>
   <td  >Have you ever had your certificate of Competency suspended or revoked?</td>
   <td >${general.certificate_suspended}</td>
</tr>
<table>
<p>If the answer is "Yes" to any of above, then give full details here under and attach a separate page, if necessary </p>
<tr>
   <td>${general.explain_court}</td>
</tr>
</table>
 `).join("");

const company_general_Table_Rows = applicant.generals.slice(1).map(general => `
    <tr>
        <td>${general.past_company}</td>
		<td>${general.past_company_manager_name_designation}</td>
		<td>${general.past_company_telephone}</td>
	</tr>
 `).join("");

const future_vacancies = applicant.generals.slice(0,1).map(general => `
    <p>If immediate employment not available do you wish to be considered for future vacancies - ${general.future_vacancies} </p>
 `).join("");

const declaration_general_Table_Rows = applicant.generals.slice(0,1).map(general => `
<tr>
    <td style="border:none;text-align:left;">${general.declaration_date}</td>
</tr>
 `).join("");

const first_sea_service_Table_Rows = applicant.experiences.slice(1).map(experience => `
  <tr>
    <td>${experience.company_name}</td>
    <td>${experience.vessel_name}</td>
    <td>${experience.rank}</td>
    <td>${experience.previous_from_date}</td>
    <td>${experience.previous_to_date}</td>
    <td>${experience.period_months}</td>
    <td>${experience.period_days}</td>
    <td>${experience.vessel_type}</td>
  </tr>
 `).join("");

const second_sea_service_Table_Rows = applicant.experiences.slice(1).map(experience => `
  <tr>
    <td>${experience.company_name}</td>
    <td>${experience.engine_type}</td>
    <td>${experience.ums}</td>
    <td>${experience.bhp}</td>
    <td>${experience.grt}</td>
    <td>${experience.year_built}</td>
    <td>${experience.drydock_done}</td>
    <td>${experience.reason_for_leaving}</td>
  </tr>
 `).join("");

const rank_experience_Table_Rows = applicant.experiences.slice(0,1).map(experience => `
  <tr>
    <th>MASTER</th>
    <td>${experience.master}</td>
    <th>CHIEF ENGINEER</th>
    <td>${experience.chief_officer}</td>
    <th>ELECTRICAL OFFICER</th>
    <td>${experience.second_officer}</td>
  </tr>
  <tr>
    <th>CHIEF OFFICER</th>
    <td>${experience.third_officer}</td>
    <th>2ND ENGINEER</th>
    <td>${experience.deck_cadet}</td>
  </tr>
  <tr>
    <th>2ND OFFICER</th>
    <td>${experience.bosun}</td>
    <th>3RD ENGINEER</th>
    <td>${experience.ab}</td>
  </tr>
  <tr>
    <th>3RD OFFICER</th>
    <td>${experience.os}</td>
    <th>4th ENGINEER</td>
    <td>${experience.chief_engineer}</td>
  </tr>
  <tr>
    <th>DECK CADET</th>
    <td>${experience.second_officer}</td>
    <th>5th ENGINEER</td>
    <td>${experience.second_engineer}</td>
  </tr>
 </table>
 <br>
 <table>
  <tr>
    <th>BOSUN</th>
    <td>${experience.third_engineer}</td>
    <th>AB</th>
    <td>${experience.fourth_engineer}</td>
    <th>OS</th>
    <td>${experience.fifth_engineer}</td>
    <th>FITTER</th>
    <td>${experience.fitter}</td>
    <th>OILER</th>
    <td>${experience.oiler}</td>
    <th>WPR</th>
    <td>${experience.wpr}</td>
    <th>CH COOK</th>
    <td>${experience.ch_cook}</td>
    <th>MESSMAN</th>
    <td>${experience.messman}</td>
  </tr>
 `).join("");

const content=`
<table style="margin-bottom:20px; border:none;">
<tr>
    <td style="border:none;" width="220px">
        <img style="max-width:200px;" src="https://www.chellship.com/wp-content/themes/chellship/images/logo.png" /> 
    </td>
    <td style="border:none;" ><h2>Application Form</h2></td>
    <td width="100" height="100" style="text-align:center;">
        <img src="${imageSrc}" style="max-width:100px; max-height:100px;" />
    </td>
    
</tr>
</table>

<table style="margin-bottom:20px;">
<tr>
    <th width="25%"><strong>Position Applied for</strong></th>
    <td width="25%">${applicant.position_applied_for}</td>
    <th width="25%"><strong>Date Available to Join</strong></th>
    <td width="25%">${applicant.date_available}</td>
</tr>
</table>
<table>

<tr>
    <th width="250" ><strong>How were you introduced to Chellaram Shipping?</strong></th>
    <td >
    ${applicant.introduction}<br>
    ${applicant.others_explain}
    </td>
</tr>

</table>

<h3>Personal Particulars</h3>
<table style="margin-bottom:20px;">
<tr>
    <th width="300"><strong>INDOS No.</strong></th>
    <td >${applicant.indos_no}</td>
    <td style="border:none;" ></td>
</tr>
</table>

<table>

<tbody><tr>
    <th><strong>Name (as per passport)</strong></th>
    <td><strong>Last: </strong>${applicant.last_name}</td>
    <td colspan="2"><strong>First: </strong>${applicant.first_name}</td>
    <td colspan="2"><strong>Middle: </strong>${applicant.middle_name}</td>
</tr>
<tr>
    <th width="160">Date of Birth</th>
    <td width="100">${applicant.date_of_birth}</td>
    <th width="200">Age</th>
    <td width="100">${applicant.age}</td>
    <th width="100">Place of Birth</th>
    <td width="100">${applicant.place_of_birth}</td>
</tr>
<tr>
    <th>Height</th>
    <td>${applicant.height}</td>
    <th>Weight</th>
    <td colspan="3">${applicant.weight}</td>
</tr>
<tr>
    <th>Nationality</th>
    <td>${applicant.nationality}</td>
    <th>Religion</th>
    <td colspan="3">${applicant.religion}</td>
</tr>
<tr>
    <th  rowspan="2">Mother Tongue</th>
    <td  rowspan="2">${applicant.mother_tongue}</td>
    <th>
        Spoken Languages 
    </th>
    <td  rowspan="1" colspan="3">${applicant.spoken_languages}</td>
</tr>
<tr>
    <th>Written Languages</th>
    <td  rowspan="1" colspan="3">${applicant.written_languages}</td>
</tr>
<tr>
    <th>Native Place</th>
    <td colspan="2">${applicant.native_place}</td>
    <th colspan="2" >Currently Resident</th>
    <td width="100">${applicant.current_resident}</td>
</tr>

<tr>
    <th>Marital Status</th>
    <td colspan="5">
        <table>
            <tr>
                <td style="border:none;">${applicant.marital_status}</td>
                
            </tr>
        </table>
    </td>
    
    
</tr>
</tbody></table>

<h3>Contact Information</h3>
<table>
<tbody>
<tr>
    <th colspan="1" style="border-bottom:1px solid #fff;" >Permanent Address</th>
    <td rowspan="2"  colspan="9">${applicant.permanent_address}</td>
</tr>
<tr>
    <td  colspan="1" ></td>
    
</tr>

<tr>
    <th width="150">Tel No.</th>
    <td colspan="2">${applicant.permanent_tel}</td>
    <th width="50">Mobile</th>
    <td>${applicant.permanent_mobile}</td>
    <th width="50">Email</th>
    <td colspan="2">${applicant.permanent_email}</td>
    
</tr>
<tr>
    <th colspan="1" style="border-bottom:1px solid #fff;" >Present Address</th>
    <td rowspan="2"  colspan="9">${applicant.present_address}</td>
</tr>
<tr>
    <td  colspan="1" ></td>
    
</tr>
<tr>
    <th width="150">Tel No.</th>
    <td colspan="2">${applicant.present_tel}</td>
    <th width="50">Mobile</th>
    <td>${applicant.present_mobile}</td>
    <th width="50">Email</th>
    <td colspan="2">${applicant.present_email}</td>
    
</tr>


</tbody>
</table><h3>Family Particulars</h3>
<table style="margin-bottom:20px;">
<tbody>
    ${emergency_family_TableRows}
</tbody>
</table>


<table style="margin-bottom:20px;">
<tbody>
    <tr>
        <td width="75"></td>
        <th width="150">Name</th>
        <th width="50">Sex</th>
        <th width="150">D.O.B., P.O.B.</th>
        <th width="70">PP No.</th>
        <th width="70">ECNR</th>
        <th width="150">Date Place Issued</th>
    </tr>
    ${family_Table_Rows}
</tbody>
</table>

<h3>Educational Background - Prior Pre-Sea Training</h3>
<table>
<tr>
    <th width="150">Name: School / College</th>
    <th width="80">From</th>
    <th width="80">To</th>
    <th>Percentage Marks Scored</th>
    <th>Position/Degree/Diploma</th>
</tr>
    ${education_Table_Rows}
</table>

<h3>Pre-Sea Training </h3>
<p>Deck Officers - If no Pre-Sea Training done then state the "Direct" cadet period </p>
<p>Engineer Officers - to additionally state the name of the workshop attended </p>

<table>
    ${pre_sea_education_Table_Rows}
</table>




<h3>Personal Identity Documents Held </h3>

<table style="margin-bottom:20px;">
    <tr>
        <th width="100">Documents</th>
        <th >Country</th>
        <th >Number</th>
        <th >Issue Date</th>
        <th >Expiry Date</th>
        <th >Place of Issue</th>
    </tr>
    ${documents_Table_Rows}
</table>


<table>
<tr>
   <td width="400">Have you even been rejected for any Visa applied for?</td>
       ${visa_general_Table_Rows}
</tr>


</table>

<h3>Certificate of Competency </h3>
<p>State details of highest certificate of competency held</p>
<table>
    <tr>
        <th >Certificate</th>
        <th >Grade </th>
        <th >Issuing Country</th>
        <th >Certificate No.</th>
        <th >Date Issued </th>
        <th >Place Issued</th>
        <th >Valid Until</th>
    </tr>
    ${certificate_Table_Rows}
</table>


<p>Certificate of competency & ATO Issued by HongKong</p>
<table>
    <tr>
        <th >Certificate Licence</th>
        <th >Certificate No. </th>
        <th >Date of Issue</th>
        <th >Place of Issue</th>
        <th >Valid Until</th>
    </tr>
    ${course_certificate_Table_Rows}
</table>

<h3>Courses Attended & Certificate Obtained</h3>
<table>
    <tr>
        <th >Course</th>
        <th >Institute/ Place </th>
        <th >Certificate No.</th>
        <th >Date Issued</th>
        <th >Valid Until</th>
    </tr>
    ${hkcertificate_Table_Rows}
</table>


<h3>Computer Literacy</h3>
<table>
    ${familiar_apps_Table_Rows}
</table>
<br>
<table>
    <tr>
        <td width="350" >Yellow Fever Vaccination (Date and Place of Issue)</td>
        <td >${applicant.medical.yellow_date} / ${applicant.medical.yellow_place}</td>
    </tr>
</table>

<h3>General</h3>
<table>
    ${accident_general_Table_Rows}
</table>

<h3>Reference </h3>
<p>State details of the Superindent / Manager of your current or immediate past employers as below: </p>
<table>
    <tr>
        <th  >Name of Company</th>
		<th  >Superindent / Manager's Name and Designation</th>
		<th  >Telephone</th>
		   
	</tr>
    ${company_general_Table_Rows}
</table>

<h3>Kindly Fill up sea experience in the attached sheet  </h3>

<h3>Declaration</h3>
<p>I do here by declate that all information furnished above is true is best of my knowledge and belief  </p>
<p>I further declate that prior to joining you, I will stand released from previous employment </p>
<p style="margin-bottom:20px;">I do here by pledge that I have never abuse any drugs in the past </p>

${future_vacancies}

<table style="margin-top:80px;">
<tbody>
<tr>
    <td style="border:none; text-align:left;" width="200.">Date</td>
</tr>
    ${declaration_general_Table_Rows}


</tbody></table>
    
   
<br>
<br>
<br>


 <h3>Sea Experience </h3>
 <p>Enter from descending order , ie.<b>latest ship first</b></p>
 
 
 
 <p>Use abbreviations:</p>
 
 <table style="margin-top:10px;">
     <tbody>
     
        <tr>
             <td style="border:none;">CG - General Cargo</td>
             <td style="border:none;">MP - Multi-Purpose</td>
             <td style="border:none;">CN – Container</td>
             <td style="border:none;">RF - Refrigerated</td>
             <td style="border:none;">RR- RO/RO</td>
             <td style="border:none;">HL - Heavy Unit</td>
            
         </tr>
         <tr>
             <td style="border:none; border-top:1px solid #333;">LS- Lash type</td>
             <td style="border:none; border-top:1px solid #333;">PS - Passenger</td>
             <td style="border:none; border-top:1px solid #333;">DR - Dredger</td>
             <td style="border:none; border-top:1px solid #333;">LV- Livestock</td>
             <td style="border:none; border-top:1px solid #333;">BC - Bulk Carrier</td>
             <td style="border:none; border-top:1px solid #333;">OBO - Ore/Bulk/Oil</td>
            
         </tr>
         <tr>
             <td style="border:none; border-top:1px solid #333;">TN – Tankers</td>
             <td style="border:none; border-top:1px solid #333;">PD -Product</td>
             <td style="border:none; border-top:1px solid #333;">GS - LPG/LNG</td>
             <td style="border:none; border-top:1px solid #333;">CH - Chemical Tanker</td>
             <td style="border:none; border-top:1px solid #333;">OS - Off-shore</td>
             <td style="border:none; border-top:1px solid #333;">PCC - Pure Car Carrier</td>
            
         </tr>
         
        
         
     </tbody>
 </table>
 
 
 
 

 <h3>RECORD OF PREVIOUS SEA SERVICE </h3>

 <table>
   <tr>
        <th>COMPANY</th>
        <th>VESSEL</th>
        <th>RANK</th>
        <th>
        FROM
        </th>
        <th>
        TO
        </th>
        <th>
        PERIOD
        M
        </th>
        <th>
        PERIOD
        D
        </th>
        <th>VESSEL TYPE</th>
  </tr>
    ${first_sea_service_Table_Rows}
 </table>
<br>
 <table>
  <tr>
    <th>COMPANY</th>
    <th>ENGINE TYPE</th>
    <th>UMS / NON - UMS</th>
    <th>BHP</th>
    <th>GRT</th>
    <th>YEAR BUILT</th>
    <th>DRYDOCK DONE</th>
    <th>REASONS FOR LEAVING COMPANY</th>
  </tr>
    ${second_sea_service_Table_Rows}
 </table>

 <h3>TOTAL RANK EXPERIENCE IN MONTHS:</h3>
 <table>
    ${rank_experience_Table_Rows}
 </table>`

        html = html.replace('<!-- Dynamic content will be inserted here -->', content );


        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'load' });

        // const reportName = `report_${moment().format('YYYY-MM-DD_HH-mm-ss')}.pdf`;
        const reportName = `${applicant.first_name || 'Unknown'}.pdf`;
        const pdfPath = path.join(__dirname, `../files/output/${reportName}`);

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0.5cm',
                bottom: '0.5cm',
                left: '0.5cm',
                right: '0.5cm'
            }
        });

        console.log(`PDF generated successfully at: ${pdfPath}`);
        await browser.close();

        return pdfPath;

    } catch (error) {
        console.log('Error generating PDF:', error);
    }
}

module.exports = { generatePDF };
