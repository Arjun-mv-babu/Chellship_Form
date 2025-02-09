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
        // console.log("This is family_particulars:", applicant.family_particulars);

const emergency_family_TableRows = applicant.family_particulars.slice(0,1).map(family => `
    <tr>
        <td rowspan="5" style="vertical-align:top;" width="100">Next of Kin</td>
        <td width="100">Name</td>
        <td width="200">${family.emergency_name}</td>
        <td width="100">Relationship</td>
        <td colspan="2">${family.emergency_relationship}</td>
        
    </tr>
    <tr>
        <td>Address</td>
        <td colspan="4">${family.emergency_address}</td>
        
        
    </tr>
    <tr>
        <td>Telephone No.</td>
        <td>${family.emergency_tel}</td>
        <td>Email</td>
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
   <td width="170">Pre-Sea Training Institute</td>
   <td colspan="3">${education.institute_name}</td>
</tr>
<tr>
   <td>Date commenced</td>
   <td width="150">${education.pre_sea_from_date}</td>
   <td width="150">Date Completed</td>
   <td>${education.pre_sea_to_date}</td>
</tr>
<tr>
   <td>Degree Diploma Certificate</td>
   <td>${education.course}</td>
   <td>Class Obtained</td>
   <td>${education.class_obtained}</</td>
   
</tr>
 <tr>
   <td>Name of Workshop</td>
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

// ?????
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

// ?????
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

// ?????
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

// ?????
const company_general_Table_Rows = applicant.generals.slice(1).map(general => `
    <tr>
        <td>${general.past_company}</td>
		<td>${general.past_company_manager_name_designation}</td>
		<td>${general.past_company_telephone}</td>
	</tr>
 `).join("");

// ?????
const future_vacancies = applicant.generals.slice(0,1).map(general => `
    <p>If immediate employment not available do you wish to be considered for future vacancies - ${general.future_vacancies} </p>
 `).join("");

// ?????
const declaration_general_Table_Rows = applicant.generals.slice(0,1).map(general => `
<tr>
    <td style="border:none;">&nbsp;</td>
    <td style="border:none;border-bottom:1px solid #000;">${general.signature_path}</td>
    <td style="border:none;"></td>
    <td style="border:none;border-bottom:1px solid #000;">${general.declaration_date}</td>
    <td style="border:none;">&nbsp;</td>
</tr> `).join("");

const content=`
<table style="margin-bottom:20px; border:none;">
<tr>
    <td style="border:none;" width="220px">
        <img style="max-width:200px;" src="https://www.chellship.com/wp-content/themes/chellship/images/logo.png" /> 
    </td>
    <td style="border:none;" ><h2>Application Form</h2></td>
    <td width="100" height="100" style="text-align:center;">
        Affix passport size photo here.
    </td>
    
</tr>
</table>

<table style="margin-bottom:20px;">
<tr>
    <td width="25%"><strong>Position Applied for</strong></td>
    <td width="25%">${applicant.position_applied_for}</td>
    <td width="25%"><strong>Date Available to Join</strong></td>
    <td width="25%">${applicant.position_applied_for}</td>
</tr>
</table>
<table>

<tr>
    <td width="250" ><strong>How were you introduced to Chellaram Shipping?</strong></td>
    <td >
    ${applicant.introduction}<br>
    ${applicant.others_explain}
    </td>
</tr>

</table>

<h3>Personal Particulars</h3>
<table style="margin-bottom:20px;">
<tr>
    <td width="300"><strong>INDOS No.</strong></td>
    <td >${applicant.indos_no}</td>
    <td style="border:none;" ></td>
</tr>
</table>

<table>

<tbody><tr>
    <td><strong>Name (as per passport)</strong></td>
    <td><strong>Last:</strong>${applicant.last_name}</td>
    <td colspan="2"><strong>First:</strong>${applicant.first_name}</td>
    <td colspan="2"><strong>Middle:</strong>${applicant.middle_name}</td>
</tr>
<tr>
    <td width="160">Date of Birth</td>
    <td width="100">${applicant.date_of_birth}</td>
    <td width="200">Age</td>
    <td width="100">${applicant.age}</td>
    <td width="100">Place of Birth</td>
    <td width="100">${applicant.place_of_birth}</td>
</tr>
<tr>
    <td>Height</td>
    <td>${applicant.height}</td>
    <td>Weight</td>
    <td colspan="3">${applicant.weight}</td>
</tr>
<tr>
    <td>Nationality</td>
    <td>${applicant.nationality}</td>
    <td>Religion</td>
    <td colspan="3">${applicant.religion}</td>
</tr>
<tr>
    <td  rowspan="2">Mother Tongue</td>
    <td  rowspan="2">${applicant.mother_tongue}</td>
    <td>
        Spoken Languages 
    </td>
    <td  rowspan="1" colspan="3">${applicant.spoken_languages}</td>
</tr>
<tr>
    <td>Written Languages</td>
    <td  rowspan="1" colspan="3">${applicant.written_languages}</td>
</tr>
<tr>
    <td>Native Place</td>
    <td colspan="2">${applicant.native_place}</td>
    <td colspan="2" >Currently Resident</td>
    <td width="100">${applicant.current_resident}</td>
</tr>

<tr>
    <td>Marital Status</td>
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
    <td colspan="1" style="border-bottom:1px solid #fff;" >Permanent Address</td>
    <td rowspan="2"  colspan="9">${applicant.permanent_address}</td>
</tr>
<tr>
    <td  colspan="1" ></td>
    
</tr>

<tr>
    <td width="150">Tel No.</td>
    <td colspan="2">${applicant.permanent_tel}</td>
    <td width="50">Mobile</td>
    <td>${applicant.permanent_mobile}</td>
    <td width="50">Email</td>
    <td colspan="2">${applicant.permanent_email}</td>
    
</tr>
<tr>
    <td colspan="1" style="border-bottom:1px solid #fff;" >Present Address</td>
    <td rowspan="2"  colspan="9">${applicant.present_address}</td>
</tr>
<tr>
    <td  colspan="1" ></td>
    
</tr>
<tr>
    <td width="150">Tel No.</td>
    <td colspan="2">${applicant.present_tel}</td>
    <td width="50">Mobile</td>
    <td>${applicant.present_mobile}</td>
    <td width="50">Email</td>
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
        <td width="150">Name</td>
        <td width="50">Sex</td>
        <td width="150">D.O.B., P.O.B.</td>
        <td width="70">PP No.</td>
        <td width="70">ECNR</td>
        <td width="150">Date Place Issued</td>
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
        <td width="100">Documents</td>
        <td >Country</td>
        <td >Number</td>
        <td >Issue Date</td>
        <td >Expiry Date</td>
        <td >Place of Issue</td>
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
        <td >Certificate</td>
        <td >Grade </td>
        <td >Issuing Country</td>
        <td >Certificate No.</td>
        <td >Date Issued </td>
        <td >Place Issued</td>
        <td >Valid Until</td>
    </tr>
    ${certificate_Table_Rows}
</table>


<p>Certificate of competency & ATO Issued by HongKong</p>
<table>
    <tr>
        <td >Certificate Licence</td>
        <td >Certificate No. </td>
        <td >Date of Issue</td>
        <td >Place of Issue</td>
        <td >Valid Until</td>
    </tr>
    ${course_certificate_Table_Rows}
</table>

<h3>Courses Attended & Certificate Obtained</h3>
<table>
    <tr>
        <td >Course</td>
        <td >Institute/ Place </td>
        <td >Certificate No.</td>
        <td >Date Issued</td>
        <td >Valid Until</td>
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
        <td  >Name of Company</td>
		<td  >Superindent / Manager's Name and Designation</td>
		<td  >Telephone</td>
		   
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

    ${declaration_general_Table_Rows}
<tr>
    <td style="border:none;">&nbsp;</td>
    <td style="border:none; text-align:center;" width="200">Signature</td>
    <td style="border:none;"></td>
    <td style="border:none; text-align:center;" width="200.">Date</td>
    <td style="border:none;">&nbsp;</td>
</tr>


</tbody></table>`
    


        html = html.replace('<!-- Dynamic content will be inserted here -->', content );


        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'load' });

        // const reportName = `report_${moment().format('YYYY-MM-DD_HH-mm-ss')}.pdf`;
        const reportName = `${applicant.first_name || 'Unknown'}${applicant.middle_name || 'Unknown'}${applicant.last_name || 'Unknown'}.pdf`;
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

    } catch (error) {
        console.log('Error generating PDF:', error);
    }
}

module.exports = { generatePDF };
