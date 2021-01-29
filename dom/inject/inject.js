/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, 
and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div>
 to the entire html document. 
*/

function firstParagraph(){
    let center = document.createElement('center')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')    

    h1.innerHTML = '<i>HTML Practice Exercise TEKcamp</i>'
    h2.innerHTML = '<a href="">Teksystems "TEKcamp"</a>'

    center.appendChild(h1)
    center.appendChild(h2)    

    render(center)  
}


function secondParagraph(){
    let hr = document.createElement('hr')
    let hr2 = document.createElement('hr')
    let p = document.createElement('p')
    let ol = document.createElement('ol')
    let li = document.createElement('li')
    let li2 = document.createElement('li')

    p.innerHTML = "I love <i>HTML</i> for the following reasons: </p>"
    li.textContent = "I learned it quickly"
    li2.textContent = "I can make web pages using code"

    ol.appendChild(li)
    ol.appendChild(li2)
    
    let arr = [hr, p, ol, hr2]

    arr.map(myTag => {
      render(myTag)  
    })
}

function thirdParagraph(){
    let lastPara = document.createElement("p") 
    let lastH1 = document.createElement('h1')
    let a = document.createElement('a')
    let span = document.createElement('span')

    lastPara.textContent = "My instructor’s email address is: "
    lastH1.textContent = "Have a great day!"
    a.href = "mailto:ayunas@teksystems.com"
    a.textContent = 'href="mailto:ayunas@teksystems.com"'
    span.textContent = `I really look forward to learning how to code!  Have a great day.  
    -[Team "Git'er Done"]`

    lastPara.appendChild(a)

    let arr = [lastPara, lastH1, span]

    arr.map(item => {
        render(item)
    })
}


function render(para){
    let id = document.querySelector("#inject")
    id.appendChild(para)
}

let renderArray = [firstParagraph(), secondParagraph(),thirdParagraph()]

renderArray.map(item => {
    return item
})



