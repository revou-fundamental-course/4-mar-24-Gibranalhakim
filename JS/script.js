// float nama variabel
document.getElementById('calculate-button').addEventListener('click', function() {
    var weight = parseFloat(document.querySelector('.form-item').value);
    var height = parseFloat(document.querySelector('.form-item3').value);
    var gender = document.querySelector('input[name="sex"]:checked');
    var age = parseFloat(document.querySelector('.form-item2').value);

    if (!weight || !height || !gender || !age) {
        swal("Peringatan!", "Harap lengkapi semua kolom input untuk menghitung BMI!", "warning");
        return;
    }
 
    var bmi = calculateBMI(weight, height);
    var interpretation = interpretBMI(bmi);
    document.querySelector('#result').innerHTML = bmi.toFixed(2);
    document.querySelector('#result-category').innerHTML = `Kategori BMI: ${interpretation}`;

    var explanation = getExplanation(interpretation);
    document.querySelector('#explanation-text').innerHTML = explanation;
});

function calculateBMI(weight, height) {
    return weight / (height * height / 10000); // Convert height from cm to m
}

// Logika pengkategorian
function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal (ideal)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Kelebihan berat badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
} 

function getExplanation(interpretation) {
    switch(interpretation) {
        case "Kekurangan berat badan":
            return "Kategori berat badan ini menunjukkan bahwa Anda memiliki berat badan di bawah normal. Anda mungkin perlu meningkatkan asupan makanan untuk mencapai berat badan yang sehat.";
        case "Normal (ideal)":
            return "Kategori berat badan ini menunjukkan bahwa Anda memiliki berat badan yang ideal untuk tinggi badan Anda. Terus pertahankan pola makan dan gaya hidup yang sehat.";
        case "Kelebihan berat badan":
            return "Kategori berat badan ini menunjukkan bahwa Anda memiliki berat badan lebih dari yang dianggap normal. Anda mungkin perlu memperbaiki pola makan dan meningkatkan aktivitas fisik untuk mencapai berat badan yang sehat.";
        case "Kegemukan (Obesitas)":
            return "Kategori berat badan ini menunjukkan bahwa Anda memiliki kelebihan berat badan yang signifikan, yang dapat meningkatkan risiko masalah kesehatan. Konsultasikan dengan dokter atau ahli gizi untuk mengembangkan rencana penurunan berat badan yang sehat.";
        default:
            return "";
    }
}
