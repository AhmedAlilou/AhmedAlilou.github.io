let countries = ["Russia", 17098246, "Canada", 9984670, "China", 9596961, "United States", 9525067, "Brazil", 8515767, "Australia", 7692024, "India", 3287263, "Argentina", 2780400, "Kazakhstan", 2724900, "Algeria", 2381741, "DR Congo", 2344858, "Saudi Arabia", 2149690, "Mexico", 1904569, "Indonesia", 1904569, "Sudan", 1861484, "Libya", 1759540, "Iran", 1648195, "Mongolia", 1564110, "Peru", 1285216, "Chad", 1284000, "Niger", 1267000, "Angola", 1246700, "Mali", 1240192, "South Africa", 1221037, "Colombia", 1141748, "Ethiopia", 1104300, "Bolivia", 1098581, "Mauritania", 1030700, "Egypt", 1002450, "Tanzania", 945087, "Nigeria", 923768, "Venezuela", 916445, "Pakistan", 881913, "Namibia", 825615, "Mozambique", 801590, "Turkey", 783562, "Chile", 756102, "Zambia", 752612, "Myanmar", 676578, "Afghanistan", 652864, "South Sudan", 644329, "France", 640679, "Somalia", 637657, "Central African Republic", 622984, "Ukraine", 603500, "Madagascar", 587041, "Botswana", 581730, "Kenya", 580367, "Yemen", 555000, "Turkmenistan", 488100, "Cameroon", 475442, "Papua New Guinea", 462840, "Uzbekistan", 447400, "Sweden", 450295, "Thailand", 513120, "Morocco", 446550, "Iraq", 438317, "Paraguay", 406752, "Zimbabwe", 390757, "Norway", 385207, "Japan", 377976, "Germany", 357114, "Congo", 342000, "Finland", 338425, "Vietnam", 331212, "Malaysia", 330803, "Ivory Coast", 322463, "Poland", 312696, "Oman", 309500, "Italy", 301339, "Philippines", 300000, "Ecuador", 276841, "Burkina Faso", 274222, "New Zealand", 270467, "Gabon", 267668, "Guinea", 245857, "United Kingdom", 242495, "Uganda", 241550, "Ghana", 238533, "Romania", 238397, "Laos", 236800, "Guyana", 214969, "Belarus", 207600, "Kyrgyzstan", 199951, "Senegal", 196722, "Syria", 185180, "Cambodia", 181035, "Uruguay", 176215, "Suriname", 163820, "Tunisia", 163610, "Bangladesh", 148460, "Nepal", 147181, "Tajikistan", 143100, "Greece", 131957, "Nicaragua", 130373, "North Korea", 120540, "Malawi", 118484, "Eritrea", 117600, "Benin", 114763, "Honduras",112492, "Liberia", 111369, "Bulgaria", 111002, "Cuba", 109884, "Guatemala", 108889, "Iceland", 103000, "South Korea", 100210, "Hungary", 93028, "Portugal", 92226, "Jordan", 89342, "Serbia", 88361, "Azerbaijan", 86600, "Austria", 83871, "United Arab Emirates", 83600, "Czech Republic", 78871, "Panama", 75417, "Sierra Leone", 71740, "Ireland", 70273, "Georgia", 69700, "Sri Lanka", 65610, "Lithuania", 65300, "Latvia", 64559, "Togo", 56785, "Croatia", 56594, "Bosnia and Herzegovina", 51209, "Costa Rica", 51100, "Slovakia", 49037, "Dominican Republic", 48671, "Estonia", 45227, "Denmark", 43094, "Netherlands", 41850, "Switzerland", 41284, "Bhutan", 38394, "Taiwan", 36193, "Guinea-Bissau", 36125, "Moldova", 33846, "Belgium", 30528, "Lesotho", 30355, "Armenia", 29743, "Solomon Islands", 28896, "Albania", 28748, "Equatorial Guinea", 28051, "Burundi", 27834, "Haiti", 27750, "Rwanda", 26338, "North Macedonia", 25713, "Djibouti", 23200, "Belize", 22966, "El Salvador", 21041, "Israel", 20770, "Slovenia", 20273, "Fiji", 18272, "Kuwait", 17818, "Eswatini", 17364, "East Timor", 14919, "Bahamas", 13943, "Montenegro", 13812, "Vanuatu", 12189, "Qatar", 11586, "Gambia", 11295, "Jamaica", 10991, "Kosovo", 10887, "Lebanon", 10452, "Cyprus", 9251, "Palestine", 6020, "Brunei", 5765, "Trinidad and Tobago", 5130, "Cape Verde", 4033, "Samoa", 2842, "Luxembourg", 2586, "Mauritius", 2040, "Comoros", 1862, "São Tomé and Príncipe", 964, "Kiribati", 811, "Bahrain", 785, "Dominica", 751, "Tonga", 747, "Singapore", 728, "Micronesia", 702, "Saint Lucia", 616, "Andorra", 468, "Palau", 459, "Seychelles", 452, "Antigua and Barbuda", 442, "Barbados", 430, "Saint Vincent and the Grenadines", 389, "Grenada", 344, "Malta", 316, "Maldives", 300, "Saint Kitts and Nevis", 261, "Marshall Islands", 181,  "Liechtenstein", 160, "San Marino", 61, "Tuvalu", 26, "Nauru", 21, "Monaco", 2, "Vatican City", 0.49]
const circle = document.getElementById("circle")
let randomIndex = Math.floor(Math.random()*392)
let randomIndex2 = Math.floor(Math.random()*392)
let countryIndex = countries[randomIndex]
let countryIndex2 = countries[randomIndex2]
let score = 0
let highscore = 0
let options = []
let country = ""
let country2 = ""
let size = 0
let size2 = 0
let message = document.getElementById("message")
let scoreP = document.getElementById("score")
let highscoreP = document.getElementById("highscore")


if (typeof countryIndex == "number") {
    size = countryIndex
    randomIndex --
    countryIndex = countries[randomIndex]
    country = countryIndex

}

else if (typeof countryIndex == "string") {
    country = countryIndex
    randomIndex ++
    countryIndex = countries[randomIndex]
    size = countryIndex
}

if (typeof countryIndex2 == "number") {
    size2 = countryIndex2
    randomIndex2 --
    countryIndex2 = countries[randomIndex2]
    country2 = countryIndex2
}

else if (typeof countryIndex2 == "string") {
    country2 = countryIndex2
    randomIndex2 ++
    countryIndex2 = countries[randomIndex2]
    size2 = countryIndex2
}

function newCountry(){
    randomIndex2 = Math.floor(Math.random()*392)
    countryIndex2 = countries[randomIndex2]
    if (countryIndex == countryIndex2) {
        countryIndex2 = countries[randomIndex2]
    }

    
    if (typeof countryIndex2 == "number") {
        size2 = countryIndex2
        randomIndex2 --
        countryIndex2 = countries[randomIndex2]
        country2 = countryIndex2
    }
    
    else if (typeof countryIndex2 == "string") {
        country2 = countryIndex2
        randomIndex2 ++
        scoreP.innerHTML = `Score: ${score}`
        countryIndex2 = countries[randomIndex2]
        size2 = countryIndex2
    }
    options[0] = options[2]
    options[1] = options[3]
    options[2] = country2
    options[3] = size2
    message.innerHTML = `Is ${options[2]} higher or lower than ${options[0]}(${options[1]}km²) in area?` 
    // change country2 to options[1] and change country to options[0]
}

function gameReset() {
    if (score > highscore){
        highscore = score
    }
    score = 0
    scoreP.innerHTML = `Score: ${score}`
    randomIndex = Math.floor(Math.random()*392)
    countryIndex = countries[randomIndex]
    newCountry()
    message.innerHTML = `Is ${options[2]} higher or lower than ${options[0]}(${options[1]}km²) in area?`
    highscoreP.innerHTML = `Highscore: ${highscore}`

}

options.push(country, size)
options.push(country2, size2)

function guessHigher() {
    if (options[3] > options[1]) {
        score ++
        scoreP.innerHTML = `Score: ${score}`
        highscoreP.innerHTML = `Highscore: ${highscore}`
        circle.classList.add('green-glow')
        setTimeout(() =>  circle.classList.remove('green-glow') , 300);
        newCountry()
    } else {
        circle.classList.add('red-glow');
        setTimeout(() =>   circle.classList.remove('red-glow') , 300);
        gameReset()
        
    }
}

function guessLower() {
    if (options[1] > options[3]) {
        score ++
        scoreP.innerHTML = `Score: ${score}`
        highscoreP.innerHTML = `Highscore: ${highscore}`
        circle.classList.add('green-glow')
        setTimeout(() =>  circle.classList.remove('green-glow') , 300);
        newCountry()
    } else {
        circle.classList.add('red-glow');
        setTimeout(() =>   circle.classList.remove('red-glow') , 300);
        gameReset()
    }
}
message.innerHTML = `Is ${options[2]} higher or lower than ${options[0]}(${options[1]}km²) in area?` 
highscoreP.innerHTML = `Highscore: ${highscore}`