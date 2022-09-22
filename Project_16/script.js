const quotestore=[
     {
          text:'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
          img:'https://images.gr-assets.com/authors/1429114964p2/9810.jpg'
     },
     {
          text:'Good friends, good books, and a sleepy conscience: this is the ideal life.',
          img:'https://images.gr-assets.com/authors/1322103868p2/1244.jpg'
     },
     {
          text:'Life is what happens to us while we are making other plans.',
          img:'https://images.gr-assets.com/authors/1368887014p2/276029.jpg'
     },
     {
          text:'I may not have gone where I intended to go, but I think I have ended up where I needed to be.',
          img:'https://images.gr-assets.com/authors/1616277702p2/4.jpg'
     },
     {
          text:'Sometimes the questions are complicated and the answers are simple.',
          img:'https://images.gr-assets.com/authors/1193930952p2/61105.jpg'
     },
     {
          text:"Life isn't about finding yourself. Life is about creating yourself.",
          img:'https://images.gr-assets.com/authors/1271683549p2/5217.jpg'
     },
     {
          text:"Who are you to judge the life I live? I know I'm not perfect-and I don't live to be but before you start pointing fingers...make sure you hands are clean!",
          img:"https://images.gr-assets.com/authors/1207771636p2/25241.jpg"
     },
     {
          text:"Be yourself; everyone else is already taken.",
          img:"https://images.gr-assets.com/authors/1521044377p2/3565.jpg"
     },
     {
          text:"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
          img:"https://images.gr-assets.com/authors/1282396130p2/1744830.jpg"
     },
     {
          text:"Without music, life would be a mistake.",
          img:"https://images.gr-assets.com/authors/1651474065p2/1938.jpg"
     },
     {
          text:"We are all in the gutter, but some of us are looking at the stars.",
          img:"https://images.gr-assets.com/authors/1521044377p2/3565.jpg"
     },
     {
          text:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
          img:"https://images.gr-assets.com/authors/1521044377p2/3565.jpg"
     },
     {
          text:"“It is better to be hated for what you are than to be loved for what you are not.",
          img:"https://images.gr-assets.com/authors/1424119198p2/7617.jpg"
     },
     {
          text:"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
          img:"https://images.gr-assets.com/authors/1521044377p2/3565.jpg"
     },
     {
          text:"It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
          img:"https://images.gr-assets.com/authors/1651474065p2/1938.jpg"
     },
     {
          text:"Love all, trust a few, do wrong to none.",
          img:"https://images.gr-assets.com/authors/1654446514p2/947.jpg"
     },
     {
          text:"Love looks not with the eyes, but with the mind,And therefore is winged Cupid painted blind.",
          img:"https://images.gr-assets.com/authors/1654446514p2/947.jpg"
     },
     {
          text:"If you can make a woman laugh, you can make her do anything.",
          img:"https://images.gr-assets.com/authors/1436929110p2/82952.jpg"
     },
     {
          text:"God has no religion.",
          img:"https://images.gr-assets.com/authors/1356810912p2/5810891.jpg"
     },
     {
          text:"Sometimes the Bible in the hand of one man is worse than a whisky bottle in the hand of (another)... There are just some kind of men who - who're so busy worrying about the next world they've never learned to live in this one, and you can look down the street and see the results.",
          img:"https://images.gr-assets.com/authors/1593873322p2/1825.jpg"
     },
     {
          text:"When I do good, I feel good. When I do bad, I feel bad. That's my religion.", 
          img:"https://images.gr-assets.com/authors/1198518158p2/229.jpg"
     },
     {
          text:"My religion is very simple. My religion is kindness.", 
          img:"https://images.gr-assets.com/authors/1241989386p2/570218.jpg"
     },
]

const targetButton=document.getElementById('btn')
const displayQuote=document.getElementById('quotegen')
const displayImage=document.getElementById('img')

targetButton.addEventListener('click',()=>{
     let randomNumber=Math.floor(Math.random()*23)
     // console.log(randomNumber)
     displayQuote.innerHTML=quotestore[randomNumber].text
     // displayQuote.attr("src", quotestore[randomNumber].img)  
     displayImage.src=quotestore[randomNumber].img

})