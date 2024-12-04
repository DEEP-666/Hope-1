
// Redirect to Blood Input Page
function redirectToBloodInput() {
    window.location.href = "report.html";
}

// Analyze Blood Parameters
function analyzeBlood() {
    // Fetch values from the form
    const rbc = parseFloat(document.getElementById("rbc").value);
    const hemoglobin = parseFloat(document.getElementById("hemoglobin").value);
    const wbc = parseFloat(document.getElementById("wbc").value);
    const neutrophils = parseFloat(document.getElementById("neutrophils").value);
    const lymphocytes = parseFloat(document.getElementById("lymphocytes").value);
    const eosinophils = parseFloat(document.getElementById("eosinophils").value);
    const basophils = parseFloat(document.getElementById("basophils").value);
    const monocytes = parseFloat(document.getElementById("monocytes").value);
    const platelet = parseFloat(document.getElementById("platelet").value);
    const mcv = parseFloat(document.getElementById("mcv").value);

    // Disease Analysis
    let diseases = [];

        // Helper function to add disease with description
        function addDisease(name, description) {
            diseases.push({ name, description });
        }
    


             /*    ---->    Diseases on the basis of RBC,MCV,Hemoglobin   <----    */


    // for --> Iron Deficiency Anemia:
    if (rbc < 4.7 && hemoglobin < 13.8 && mcv < 80 )         
        addDisease("Iron Deficiency Anemia", " - A lack of iron in the body reduces red blood cell production, leading to fatigue and weakness.");

    //for --> Secondary Polycythemia
    if (rbc > 6.1)         
        addDisease("Secondary Polycythemia", " - Chronic low oxygen levels (e.g., lung diseases, high altitudes).Symptoms: Headaches, dizziness, itching, increased clot risk.");

    //for --> Sickle Cell Anemia
    if (hemoglobin < 13.8)         
        addDisease("Sickle Cell Anemia", " - Genetic mutation causing defective hemoglobin (HbS)..Symptoms: Pain crises, fatigue, organ damage it.");

    //for -->Hemoglobinopathies
    if (hemoglobin > 17.2)         
        addDisease("Hemoglobinopathies", " - Cause: Abnormal hemoglobin types (e.g., HbC, HbE diseases).Symptoms: Vary from mild anemia to severe complications");

     
    //for --> Vitamin B12 or Folate Deficiency
     if(hemoglobin < 13.8 && mcv > 100)
        addDisease("- Vitamin B12 or Folate Deficiency", " If you don't get enough vitamin B12 or folate, it can cause weakness, tiredness, and problems with your nerves. Your body won't be able to make healthy red blood cells, which can lead to anemia.");

    //for --> Chronic Disease Anemia
    if (hemoglobin < 13.8 && rbc < 4.7 && mcv < 100) 
        addDisease("Chronic Disease Anemia", "- Chronic Disease Anemia** happens when a long-term illness affects the body’s ability to make enough healthy red blood cells. This can lead to low energy, weakness, and feeling tired. It’s often seen in people with conditions like infections, kidney problems, or autoimmune diseases. These illnesses can stop the body from using iron properly or slow down red blood cell production.");


    //for --> Hemolytic anemia
    if (hemoglobin < 13.8 && rbc < 4.7 )
        addDisease("Hemolytic Anemia", "- Hemolytic Anemia** happens when red blood cells are destroyed faster than the body can make new ones. This can make you feel tired, weak, and short of breath. It can also cause yellow skin (jaundice) and dark-colored urine. It may happen because of problems in the red blood cells themselves or because the body’s immune system attacks them.");



    /*                     ---->  Infections (WBC and WBC diffrential)   <-----       */

 
    // for --> Bacterial Infection
    if (wbc > 11000 && neutrophils > 70 ) 
        addDisease("Bacterial Infection", " - A **Bacterial Infection** occurs when harmful bacteria enter the body and cause illness. This can lead to symptoms like fever, fatigue, pain, or swelling, depending on the part of the body affected. Common bacterial infections include strep throat, urinary tract infections, and pneumonia. Antibiotics are often used to treat bacterial infections. If not treated, they can become more serious..");

    //for --> Viral Infection
    if (wbc > 11000  && lymphocytes > 40) 
        addDisease("Viral Infection", "- Viral Infection is caused by viruses, which are tiny germs that invade the body’s cells. It often leads to an increase in lymphocytes (a type of white blood cell) as the body fights the infection. Common symptoms include fever, cough, fatigue, and body aches, depending on the type of virus. Examples include the flu, colds, and COVID-19");


    // for --> Parasitic Infection
    if ( wbc > 11000 && eosinophils > 4) 
        addDisease("Parasitic Infection", "-  Parasitic Infection happens when harmful parasites, like worms or tiny organisms, live inside the body. These parasites can cause sickness by stealing nutrients, damaging tissues, or causing allergic reactions. It often leads to high levels of eosinophils (a type of white blood cell).");


    //for --> Chronic Infections
    if ( wbc > 11000 && monocytes > 8) 
        addDisease("Chronic Infection (e.g., Tuberculosis)", "- A Chronic Infection, like Tuberculosis (TB), is a long-lasting illness caused by bacteria, viruses, or other pathogens that stay in the body for a long time. These infections can lead to ongoing health problems if not treated properly.");



    /*             ---> Bone Marrow and Blood Disorders (RBC, WBC, Platelet Abnormalities)  <----            */


    // for --> Leukemia
    if ( wbc > 11000 && platelet < 150 && rbc < 4.7 ) 
        addDisease("Leukemia", "- Leukemia is a type of cancer that affects the blood and bone marrow, where blood cells are made. It happens when the bone marrow produces abnormal white blood cells that grow uncontrollably and crowd out healthy blood cells.");

    // for --> Aplastic Anemia
    if ( wbc < 4000 && platelet < 150 && rbc < 4.7) 
        addDisease("Aplastic Anemia", " - Aplastic Anemia is a condition where your body stops making enough blood cells. This happens because the bone marrow, which is like a factory for blood cells, slows down or stops working. Blood cells are important for carrying oxygen, fighting infections, and stopping bleeding, so this can cause serious health problems.");


    // for --> Polycythemia Vera
    if ( rbc > 6.1 && hemoglobin > 17.2 && platelet > 450  ) 
        addDisease("Polycythemia Vera", "- Polycythemia Vera (PV) is a rare blood condition where your body makes too many red blood cells. These extra red blood cells make your blood thicker than normal, which can slow blood flow and cause clots.");


    // for ---> Myelodysplastic Syndrome
    if ( rbc < 4.7 && platelet < 150 && wbc <= 11000) 
        addDisease("Myelodysplastic Syndrome", " - Myelodysplastic Syndrome (MDS) is a condition where the bone marrow, which makes blood cells, doesn't work properly. This leads to fewer healthy blood cells in the body and an increased risk of developing leukemia.");


    /*                  ---->   Clotting Disorders (Platelet Count and Function)     <----                      */



    // for --> Immune Thrombocytopenic Purpura (ITP)
    if (platelet < 150 && rbc >= 4.7 && rbc <= 6.1) 
        addDisease("Immune Thrombocytopenic Purpura (ITP)", " - Immune Thrombocytopenic Purpura (ITP) is a condition where the immune system mistakenly attacks and destroys platelets in the blood. Platelets are small cells that help with clotting to stop bleeding. With fewer platelets, bleeding can occur more easily.");
  
    // for --> Disseminated Intravascular Coagulation (DIC)
    if (platelet < 150 && rbc < 4.7 && wbc > 11000) 
        addDisease("Disseminated Intravascular Coagulation (DIC)", "- Disseminated Intravascular Coagulation (DIC) is a serious condition where the body’s blood clotting system goes out of control. It causes both excessive clotting in some parts of the body and severe bleeding in others.");

    // for --> Myeloproliferative Disorders
    if ( platelet > 450 && rbc >= 4.7 ) 
        addDisease("Myeloproliferative Disorders", "- Myeloproliferative Disorders are a group of diseases that cause the bone marrow (the soft tissue inside bones) to produce too many blood cells, leading to an overproduction of one or more types of blood cells.");

    // for --> Chronic Inflammatory Conditions
    if ( platelet > 450 && wbc >= 4000) 
        addDisease("Chronic Inflammatory Conditions", "- Chronic Inflammatory Conditions refer to long-lasting diseases where the body's immune system is constantly activated, leading to ongoing inflammation in various parts of the body. Inflammation is a natural response to injury or infection, but in chronic conditions, it becomes persistent and can cause damage over time.");

    // for --> chronic kidney disease
    if ( rbc < 4.7 && hemoglobin < 13.8) 
        addDisease("Chronic Kidney Disease", " - Chronic Kidney Disease (CKD) is a condition where the kidneys gradually lose their ability to filter waste and excess fluids from the blood over time. The kidneys are important organs that help keep the body clean by removing waste products and extra water, as well as balancing electrolytes like sodium and potassium.");

    // for --> liver disease
    if ( platelet < 150) 
        addDisease("Liver Disease (Cirrhosis)", " - Liver Disease (Cirrhosis) is a condition where the liver becomes severely damaged over time and can no longer function properly. The liver is a vital organ that helps filter toxins, produce important proteins, store energy, and support digestion. When the liver is damaged, it cannot carry out these functions effectively.");

    //for --> Alcoholism
    if ( platelet < 150 && rbc < 4.7 && mcv > 100) 
        addDisease("Alcoholism", "- Alcoholism can negatively affect the bone marrow, the part of your body that produces blood cells. When alcohol is consumed in large amounts over time, it can suppress the bone marrow’s ability to function properly. ");



    /*                         --->     Autoimmune Diseases   <----                    */

    
    // for --> Systemic Lupus Erythematosus (SLE):
    if ( platelet < 150 && wbc < 4000 && lymphocytes < 20) 
        addDisease("Systemic Lupus Erythematosus (SLE)", "- Systemic Lupus Erythematosus (SLE) is an autoimmune disease, which means that the body’s immune system attacks its own healthy cells and tissues by mistake.");


    /*            ---> Allergies <----       */

    // for --> Allergic disorder
    if ( eosinophils > 4 && basophils >1) 
        addDisease("Allergic Disorder - Asthma or Atopy", "- An allergic disorder happens when the immune system overreacts to substances (called allergens) that are usually harmless. These substances can include pollen, dust, pet dander, certain foods, or even insect stings.");




    // Save results to sessionStorage
    const result = {
        rbc,
        hemoglobin,
        wbc,
        neutrophils,
        lymphocytes,
        eosinophils,
        basophils,
        monocytes,
        platelet,
        mcv,
        diseases
    };
    sessionStorage.setItem("result", JSON.stringify(result));
    window.location.href = "result.html";
}

// Display Results on Result Page
window.onload = function () {
    const result = JSON.parse(sessionStorage.getItem("result"));
    if (result) {
        const reportDiv = document.getElementById("report");

        // Add basic parameters
        let reportContent = `
            <p><strong>RBC:</strong> ${result.rbc}</p>
            <p><strong>Hemoglobin:</strong> ${result.hemoglobin}</p>
            <p><strong>WBC:</strong> ${result.wbc}</p>
            <p><strong>Neutrophils:</strong> ${result.neutrophils}%</p>
            <p><strong>Lymphocytes:</strong> ${result.lymphocytes}%</p> 
            <p><strong>Eosinophils:</strong> ${result.eosinophils}%</p>
            <p><strong>Basophils:</strong> ${result.basophils}%</p>
            <p><strong>Monocytes:</strong> ${result.monocytes}%</p>
            <p><strong>Platelet:</strong> ${result.platelet}</p>
            <p><strong>MCV:</strong> ${result.mcv}</p>
        `;

        // Add diseases with descriptions
        if (result.diseases.length > 0) {
            reportContent += `<h3>Possible Diseases:</h3>`;
            result.diseases.forEach(disease => {
                reportContent += `
                    <div class="disease-detail">
                        <h4>${disease.name}</h4>
                        <p>${disease.description}</p>
                    </div>
                `;
            });
        } else {
            reportContent += `<p><strong>No diseases detected.</strong></p>`;
        }

        // Update the report div
        reportDiv.innerHTML = reportContent;
    }
};





//////////////////////////////////////////////////////////////////////////////////////


// Function to generate a 4-digit random password
function generatePassword() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Function to retrieve OTP store from localStorage
function getOtpStore() {
    const storedOtp = localStorage.getItem("otpStore");
    return storedOtp ? JSON.parse(storedOtp) : {};
}

// Function to save OTP store to localStorage
function saveOtpStore(otpStore) {
    localStorage.setItem("otpStore", JSON.stringify(otpStore));
}

document.addEventListener("DOMContentLoaded", () => {
    const continueButton = document.getElementById("continueButton");
    const verifyButton = document.getElementById("verifyButton");

    // Handle "Continue" button click (landing.html)
    if (continueButton) {
        continueButton.addEventListener("click", () => {
            const mobileNumber = document.getElementById("mobileNumber").value;

            if (!mobileNumber || mobileNumber.length !== 10) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            const otpStore = getOtpStore();
            let password;
            const isNewNumber = !otpStore[mobileNumber];

            if (isNewNumber) {
                // Generate and save password for new numbers
                password = generatePassword();
                otpStore[mobileNumber] = password;
                saveOtpStore(otpStore);
            } else {
                password = otpStore[mobileNumber];
            }

            // Store mobile number and new number flag
            localStorage.setItem("currentMobileNumber", mobileNumber);
            localStorage.setItem("isNewNumber", isNewNumber);

            // Redirect to verify.html
            window.location.href = "verify.html";
        });
    }

    // Handle "Verify" page logic
    if (verifyButton) {
        const mobileNumber = localStorage.getItem("currentMobileNumber");
        const isNewNumber = localStorage.getItem("isNewNumber") === "true";

        if (!mobileNumber) {
            alert("No mobile number found. Please go back and try again.");
            return;
        }

        const otpStore = getOtpStore();

        if (!otpStore[mobileNumber]) {
            alert("No password found for this mobile number.");
            return;
        }

        // Show password if it's a new number
        if (isNewNumber) {
            const passwordDisplay = document.querySelector(".password-display");
            passwordDisplay.textContent = `[ Your Password: ${otpStore[mobileNumber]} ]`;
            passwordDisplay.classList.add("show");

            setTimeout(() => {
                passwordDisplay.classList.remove("show");
                passwordDisplay.textContent = ""; // Clear text after animation
            }, 5000);
        }

        // Verify button click handler
        verifyButton.addEventListener("click", () => {
            const enteredPassword = document.getElementById("passwordInput").value;

            if (otpStore[mobileNumber] == enteredPassword) {
                alert("Password verified successfully!");
                window.location.href = "report.html";
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    }
});

