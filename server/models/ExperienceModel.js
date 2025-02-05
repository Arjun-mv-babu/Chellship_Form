
const experience = (sequelize,Sequelize)=>{
    const experience = sequelize.define('experience',
        {
            experience_id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            applicant_id:{
                type:Sequelize.INTEGER,
                references: {
                    model: 'applicants',
                    key: 'applicant_id'
                },
            },
            company_name: {
                type: Sequelize.STRING(100),
            },
            vessel_name: {
                type: Sequelize.STRING(100),
            },
            rank: {
                type: Sequelize.STRING(50),
            },
            previous_from_date:{
                type:Sequelize.DATEONLY,
            },
            previous_to_date:{
                type:Sequelize.DATEONLY,
            },
            period_months:{
                type:Sequelize.INTEGER,
            },
            period_days:{
                type:Sequelize.INTEGER,
            },
            vessel_type:{
                type:Sequelize.STRING(50),
            },
            engine_type:{
                type:Sequelize.STRING(50),
            },
            ums: {
                type: Sequelize.ENUM('UMS', 'NON UMS',),
            },
            bhp:{
                type:Sequelize.DECIMAL(10,2),
            },
            grt:{
                type:Sequelize.DECIMAL(10,2),
            },
            // crane_make:{
            //     type:Sequelize.STRING(100),
            // },
            // grab_exp: {
            //     type: Sequelize.ENUM('Yes', 'No',),
            // },
            year_built:{
                type:Sequelize.INTEGER,
            },
            drydock_done:{
                type:Sequelize.STRING(255),
            },
            reason_for_leaving:{
                type:Sequelize.TEXT,
            },

            master: {
                type: Sequelize.INTEGER,
            },
            chief_officer: {
                type: Sequelize.INTEGER,
            },
            second_officer: {
                type: Sequelize.INTEGER,
            },
            third_officer: {
                type: Sequelize.INTEGER,
            },
            deck_cadet: {
                type: Sequelize.INTEGER,
            },
            bosun: {
                type: Sequelize.INTEGER,
            },
            ab: {
                type: Sequelize.INTEGER,
            },
            os: {
                type: Sequelize.INTEGER,
            },
            
            chief_engineer: {
                type: Sequelize.INTEGER,
            },
            second_engineer: {
                type: Sequelize.INTEGER,
            },
            third_engineer: {
                type: Sequelize.INTEGER,
            },
            fourth_engineer:{
                type:Sequelize.INTEGER,
            },
            fifth_engineer:{
                type:Sequelize.INTEGER,
            },
            fitter:{
                type:Sequelize.INTEGER,
            },
            oiler:{
                type:Sequelize.INTEGER,
            },
            wpr:{
                type:Sequelize.INTEGER,
            },
            ch_cook:{
                type:Sequelize.INTEGER,
            },
            messman:{
                type:Sequelize.INTEGER,
            },
        },
    );
    return experience;
};


module.exports = experience