const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const generatePDF = async (export_data) => {
    try {

        const templatePath = path.join(__dirname, '../template/template.html');
        let html = fs.readFileSync(templatePath, 'utf8');

        const applicant = export_data ? export_data : {};

        console.log("This is Data:", applicant);

    const content = `
    <h2>Personal particulars</h2>
    <label><b>INDOS No. </b>${applicant.indos_no}</label>
    <table>
        <tr>
            <td>Name (as per passport)</td>
            <td>${applicant.last_name}</td>
            <td>${applicant.first_name}</td>
            <td>${applicant.middle_name}</td>
        </tr>
        <tr>
            <td>Date of Birth</td>
            <td>${applicant.date_of_birth}</td>
            <td>Age</td>
            <td>${applicant.age}</td>
        </tr>
        <tr>
            <td>Height</td>
            <td>${applicant.height}</td>
            <td>Weight</td>
            <td>${applicant.weight}</td>
        </tr>
        <tr>
            <td>Nationality</td>
            <td>${applicant.nationality}</td>
            <td>Religion</td>
            <td>${applicant.religion}</td>
        </tr>
        <tr>
            <td>Mother Tongue</td>
            <td>${applicant.mother_tongue}</td>
            <td>Spoken Languages</td>
            <td>${applicant.spoken_languages}</td>
        </tr>
        <tr>
            <td>Written Languages</td>
            <td>${applicant.written_languages}</td>
            <td>Native Place</td>
            <td>${applicant.native_place}</td>
        </tr>
        <tr>
            <td>Place of Birth</td>
            <td colspan>${applicant.place_of_birth}</td>
            <td>Currently Resident</td>
            <td colspan="3">${applicant.current_resident}</td>
        </tr>
        <tr>
            <td>Marital Status</td>
            <td>${applicant.marital_status}</td>
        </tr>
    </table>
    
    <h3>Permanent Address</h3>
    ${applicant.permanent_address}
    <br><br>
    <label>Tel No. : ${applicant.permanent_tel}</label>
    <br>
    <label>Mobile : ${applicant.permanent_mobile}</label>
    <br>
    <label>E-mail : ${applicant.permanent_email}</label>
    <br>
    
    <h3>Present Address</h3>
    ${applicant.present_address}
    <br><br>
    <label>Tel No. : ${applicant.present_tel}</label>
    <br>
    <label>Mobile : ${applicant.present_mobile}</label>
    <br>
    <label>E-mail : ${applicant.present_email}</label>
    <br>
    
    <h2>Family particulars</h2>
    <h3>Next of Kin</h3>
    <table>
        <tr>
            <td>Name</td>
            <td>${applicant.family_particular.emergency_name}</td>
            <td>Relationship</td>
            <td>${applicant.family_particular.emergency_relationship}</td>
        </tr>
        <tr>
            <td>Address</td>
            <td colspan="3">${applicant.family_particular.emergency_address}</td>
        </tr>
        <tr>
            <td>Tel No.</td>
            <td>${applicant.family_particular.emergency_tel}</td>
            <td>E-mail</td>
            <td>${applicant.family_particular.emergency_email}</td>
        </tr>
    </table>
    
    <table>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Sex</th>
            <th>D.O.P / P.O.B</th>
            <th>PP No.</th>
            <th>ECNR</th>
            <th>Date / Place Issued</th>
        </tr>
        <tr>
            <td>${applicant.family_particular.family_member}</td>
            <td>${applicant.family_particular.family_member_name}</td>
            <td>${applicant.family_particular.sex}</td>
            <td>${applicant.family_particular.family_date_of_birth}</td>
            <td>${applicant.family_particular.passport_number}</td>
            <td>${applicant.family_particular.ECNR}</td>
            <td>${applicant.family_particular.date_issued} / ${applicant.family_particular.place_issued}</td>
        </tr>
    </table>
    <br>`

    
    const education_content = applicant.education_backgrounds ? applicant.education_backgrounds.map(education => {
    return `
    <h2>Educational Background - Prior Pre-Sea Training</h2>
    <table>
        <tr>
            <th>Name: School / College</th>
            <th>From</th>
            <th>To</th>
            <th>Percentage Marks Scored</th>
            <th>Position / Degree / Diploma</th>
        </tr>
        <tr>
            <td>${education.school_name}</td>
            <td>${education.from_date}</td>
            <td>${education.to_date}</td>
            <td>${education.percentage}</td>
            <td>${education.position_degree_diploma}</td>
        </tr>
    </table> 
    <br>`
}).join('') // Join the array into a single string
: ''; // Fallback if education_backgrounds is missing

        // html = html.replace('<!-- Dynamic content will be inserted here -->', content + education_content );
        html = html.replace('<!-- Dynamic content will be inserted here -->', content + education_content );


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
