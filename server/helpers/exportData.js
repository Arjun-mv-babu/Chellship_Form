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

const content=`
<h1>Chellship Application Form</h1>

<h2>Application</h2>
<table>
    <tr>
        <td colspan="17">AFFIX PASSPORT SIZE PHOTO HERE</td>
    </tr>
</table>

<br>

<table>
    <tr>
        <td>Position Applied for</td>
        <td colspan="16">${applicant.position_applied_for}</td>
    </tr>
</table>

<br>

<table>
    <tr>
        <td>How were you introduced to Chellaram Shipping?</td>
        <td colspan="16">
            ${applicant.introduction}
            <br>
            ${applicant.others_explain}
        </td>
    </tr>
</table>

<br>

<h4><strong><u>Personal particulars</u></strong></h4>
<table>
    <tr>
        <td>INDOS No.</td>
        <td colspan="16">${applicant.indos_no}</td>
    </tr>
</table>

<br>

<table>
    <tr>
        <td>Name (as per passport)</td>
        <td colspan="16">
            ${applicant.first_name} ${applicant.middle_name} ${applicant.last_name}
        </td>
    </tr>
    <tr>
        <td>Date of birth: ${applicant.date_of_birth}</td> <td>Age: ${applicant.age}</td> <td>Place of Birth: ${applicant.place_of_birth}</td>
    </tr>
    <tr>
        <td>Height</td>
        <td colspan="16">Weight: ${applicant.height}</td>
    </tr>
    <tr>
        <td>Nationality</td>
        <td colspan="16">Religion: ${applicant.nationality}</td>
    </tr>
    <tr>
        <td>Mother tongue: ${applicant.mother_tongue}</td>
        <td>Spoken Languages: ${applicant.spoken_languages}</td>
        <td>Written Languages: ${applicant.written_languages}</td>
    </tr>
    <tr>
        <td>Native Place: ${applicant.native_place}</td>
        <td>Currently resident: ${applicant.current_resident}</td>
    </tr>
    <tr>
        <td>Marital Status</td>
        <td>
            ${applicant.marital_status}
        </td>
    </tr>
</table>

<br>

<table>
    <tr>
        <td>Permanent Address</td>
        <td>${applicant.permanent_address}</td>
    </tr>
    <tr>
        <td>Tel No.: ${applicant.permanent_tel}</td>
        <td>Mobile: ${applicant.permanent_mobile}</td>
        <td>E-mail: ${applicant.permanent_email}</td>
    </tr>
    <tr>
        <td>Present Address</td>
        <td>${applicant.present_address}</td>
    </tr>
    <tr>
        <td>Tel No.: ${applicant.present_tel}</td>
        <td>Mobile: ${applicant.present_mobile}</td>
        <td>E-mail: ${applicant.present_email}</td>
    </tr>
</table>
<br>`
`<h3><strong><u>Family particulars</u></strong></h3>

<table>
    <tr>
        <td>Next of Kin</td>
        <td colspan="16">
            Name: <input type="text"> Relationship: <input type="text">
            Address: <input type="text"> Tel No.: <input type="text"> E-mail: <input type="text">
        </td>
    </tr>

</table>
<br>
<table>

    <tr>
        <td>Wife</td>
        <td colspan="16">
            Name: <input type="text"> Sex: <input type="text"> D.O.B./P.O.B.: <input type="text">
            PP No.: <input type="text"> ECNR: <input type="radio" name="ecnr_wife" value="Yes"> Yes <input type="radio" name="ecnr_wife" value="No"> No
            Date/Place Issued: <input type="text">
        </td>
    </tr>
    <tr>
        <td>Child –1</td>
        <td colspan="16">
            Name: <input type="text"> Sex: <input type="text"> D.O.B./P.O.B.: <input type="text">
            PP No.: <input type="text"> ECNR: <input type="radio" name="ecnr_child1" value="Yes"> Yes <input type="radio" name="ecnr_child1" value="No"> No
            Date/Place Issued: <input type="text">
        </td>
    </tr>
    <tr>
        <td>Child –2</td>
        <td colspan="16">
            Name: <input type="text"> Sex: <input type="text"> D.O.B./P.O.B.: <input type="text">
            PP No.: <input type="text"> ECNR: <input type="radio" name="ecnr_child2" value="Yes"> Yes <input type="radio" name="ecnr_child2" value="No"> No
            Date/Place Issued: <input type="text">
        </td>
    </tr>
    <tr>
        <td>Child –3</td>
        <td colspan="16">
            Name: <input type="text"> Sex: <input type="text"> D.O.B./P.O.B.: <input type="text">
            PP No.: <input type="text"> ECNR: <input type="radio" name="ecnr_child3" value="Yes"> Yes <input type="radio" name="ecnr_child3" value="No"> No
            Date/Place Issued: <input type="text">
        </td>
    </tr>
</table>
<br>
<table>`

`<h3><strong>Educational Background - prior Pre-Sea Training</strong></h3>

    <tr>
        <td>Name: School / College</td>
        <td colspan="16">
            From: <input type="text"> To: <input type="text"> Percentage/Marks Scored: <input type="text"> Position/Degree/Diploma: <input type="text">
        </td>
    </tr>
</table>
<br>
<table>
    
<h3><strong>Pre-Sea Training</strong></h3>

    <p>Deck Officers - if no Pre Sea training done, then state the “Direct” cadet period.</p>
    <p>Engineer Officers - to additionally state the name of the workshop attended</p>

    <tr>
        <td>Pre Sea Training Institute</td>
        <td colspan="10"></td>
    </tr>
    <tr>
        <td>Date Commenced</td>
        <td colspan="16">Date Completed: <input type="text"> Degree/Diploma/Certificate: <input type="text"> Class Obtained: <input type="text"></td>
    </tr>
    <tr>
        <td>Name of Workshop</td>
        <td colspan="16"></td>
    </tr>
</table>
    <br>
<table>

<h3><strong><u>Personal Identity Documents Held</u></strong></h3>

    <tr>
        <td>Documents</td>
        <td>Country</td>
        <td>Number</td>
        <td>Issue Date</td>
        <td>Expiry Date</td>
        <td>Place of Issue</td>
        <td colspan="11"></td>
    </tr>
    <tr>
        <td>Passport</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="11"></td>
    </tr>
    <tr>
        <td>US C1/D Visa</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="11"></td>
    </tr>
    <tr>
        <td>ECNR</td>
        <td><input type="radio" name="ecnr" value="Yes"> Yes <input type="radio" name="ecnr" value="No"> No</td>
        <td colspan="15"></td>
    </tr>
    <tr>
        <td>Indian CDC</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="11"></td>
    </tr>
    <tr>
        <td>Seaman book</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="11"></td>
    </tr>

</table>
<br>
<table>

    <tr>
        <td>Have you ever been rejected for any Visa applied for?</td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>

</table>
    <br>
<table>

    <h3><strong><u>Certificate of Competency</u></strong></h3>

    <tr>
        <td>State details of highest Certificate of Competency held</td>
        <td colspan="16">
            Certificate: <input type="text"> Grade: <input type="text"> Issuing Country: <input type="text"> Certificate No.: <input type="text"> Date Issued: <input type="text"> Place Issued: <input type="text"> Valid Until: <input type="text">
        </td>
    </tr>

</table>
<br>
<table>

    <h3><strong><u>Certificate of competency & ATO issued by Hong Kong:</u></strong></h3>

    <tr>
        <td>Certificate / License</td>
        <td>Certificate No.</td>
        <td>Date of Issue</td>
        <td>Place of Issue</td>
        <td>Valid Until</td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Hong Kong License</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Authority To Operate (ATO)</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>

</table>
<br>
<table>

    <h3><strong><u>Courses attended and Certificates obtained</u></strong></h3>

    <tr>
        <td>Course</td>
        <td>Institute / Place</td>
        <td>Certificate No.</td>
        <td>Date Issued</td>
        <td>Valid Until</td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Elementary First Aid</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Medical First Aid</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Ship Master’s Medicare</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Personal Survival Techniques</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>PSC – RB</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Fire Fighting & Fire Prevention</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Advance Fire Fighting</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>PSSR</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Radar Observer</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>ARPA</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Radar Simulator / RANSCO</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Ship / Engine Simulator</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>ECDIS</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>GMDSS</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>STCW Endorsement</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>ISO / ISM Auditor Course</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Bridge Team Management</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>Bridge Resource Management</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>
    <tr>
        <td>AMOS-4W Course</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td colspan="12"></td>
    </tr>

</table>
    <br>
<table>
    <h3><strong><u>Computer Literacy</u></strong></h3>
    <tr>
        <td>Application Familiar (Word,Excel,etc.)</td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>
    <tr>
        <td>Planned Maintenance System(PMS)</td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>
    <tr>
        <td>Training Undergone for AMOS4W</td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>
    <tr>
        <td>ISPS course</td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>
    <tr>
        <td>SSO course (Maritime Administration Approved</td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>
</table>
<br>
<table>
    <tr>
        <td colspan="16"></td>
    </tr>
    <tr>
        <td>Yellow Fever Vaccination (Date & Place of Issue)</td>   
        <td><input type="text"></td>
    </tr>

</table>
    <br>
<table>
    <h3><strong><u>General</u></strong></h3>
    <tr>
        <td>Have you ever been involved in a court of enquiry or maritime accident? </td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>
    <tr>
        <td>Have you ever had your Certificate of Competency suspended or revoked? </td>
        <td colspan="16"><input type="radio" name="visa_rejected" value="Yes"> Yes <input type="radio" name="visa_rejected" value="No"> No</td>
    </tr>
</table>
<br>
<table>
    <tr>
        <td colspan="16"></td>
    </tr>
</table>
    <br>
<table>
    <h3><strong><u>References</u></strong></h3>
    <p>State details of the Superintendent / Manager of your current or immediate past employers as below :</p>
    <tr>
        <td>Name of Company</td>
        <td>Superintendent/Manager's Name & Designation: / Place</td>
        <td>Telephone:</td>
    </tr>
    <tr>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="number"></td>
    </tr>

</table>
<br>
<table>
    <h3><strong><u>General</u></strong></h3>
</table>`
    


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
            format: 'A3',
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
