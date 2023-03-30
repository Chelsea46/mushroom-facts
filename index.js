const main = document.getElementById('main')
const factBox = document.getElementById('fact-box')
const factBoxText = document.getElementById('fact-box-text')
const btn = document.getElementById('btn')

const mushieArr = ["Fungi Are Genetically Closer to Humans Than Plants. In the past, scientists considered fungi to be plants, but now we know better. Discoveries show that fungi are more closely related to animals, including humans, than to plants.",
"The largest living organism on the planet is a single honey mushroom (Armillaria ostoyae) in the Malheur National Forest, Oregon, USA. It’s around 3.5 miles (5.6 km ) wide, occupies an area of 965 hectares (2,385 acres), and is at least 2,400 years old. But could be much older.",
"Mycorrhizal fungi have a symbiotic relationship with host trees and plants. The fungi interact with the plant’s roots and provide nutrients, getting simple sugars in return. In 1997 Prof Suzanne Simard realized that trees were talking to each other using mycorrhizal networks and came up with the term Wood Wide Web.",
"Scientists know of around eighty different species of fungi that glow in the dark and are constantly discovering new species.",
"For thousands of years, Japanese farmers have believed that lightning strikes made mushrooms more plentiful, and recent research has proved they’re correct. Researchers have bombarded several species of mushrooms with artificial lightning strikes and found it effective in several species. But, it has the biggest effect on shiitake mushrooms.",
"When shaggy ink caps mature, their gills turn pink and fill with a black liquid containing spores. This black goo drips to the ground and spreads the spores. Once the mushroom has dispersed the spores, it uses auto-digestion to devour itself. Picking a shaggy ink cap triggers auto-digestion, and you usually have 24 hours to use them before they become an inedible black mess.",
"Researchers found that mushrooms have high amounts of ergothioneine and glutathione, both important antioxidants, that help fight age-related diseases. The amounts of ergothioneine and glutathione in mushrooms vary by species, with porcini mushrooms containing high amounts of the two compounds.",
"Yartsa Gunbu, or the caterpillar fungus, is a parasitic fungus that kills its host caterpillar and uses it to produce a mushroom that grows out of the caterpillar’s head. Eating them is considered a status symbol, and at $50,000 per pound (£80,500 per kilogram), or $2,000 for a single ounce, they’re the most expensive mushrooms in the world.",
"Button, Cremini and Portobello Mushrooms Are The Same Mushroom. All of these mushrooms are the same species of mushroom, Agaricus bisporus. The only difference is their age.",
"Mushrooms Can Turn Plastic Into Food. Scientists discovered the first fungus that could digest polyurethane plastic in 2011 and another in 2017. With plastic digesting fungi in mind, Katharina Unger, of LIVIN Studio, together with the microbiology faculty at Utrecht University, created a project called the Fungi Mutarium.",
"The Death Cap Mushroom is One of The Deadliest Organisms on Earth. ou can find these deadly mushrooms throughout Europe and the United States. Half a death cap mushroom (Amanita phalloides) contains enough toxin to kill an adult."]

const photoArr = ['https://images.unsplash.com/photo-1519305124423-5ccccff55da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
'https://images.unsplash.com/photo-1595669994887-c202e84f06da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://images.unsplash.com/photo-1634083072543-842a4232a421?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
'https://images.unsplash.com/photo-1558709323-ce52d240fc39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://images.unsplash.com/photo-1602355074918-2e599dea9a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
'https://images.unsplash.com/photo-1620653141153-481059396898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
'https://images.unsplash.com/photo-1602333227670-9d39d46ee75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://images.unsplash.com/photo-1541296093088-f079b71d3478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG11c2hyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1560801063-95bf25f29e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
'https://images.unsplash.com/photo-1530660877224-1cb26c2acea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=8'
]

const colour =['#B6A28B', '#B27549', '#8A9A96', '#605F44', '#E4D4C5', '#E4D4C5', '#D57500', '#404F24', '#4E6172', '#493829', '8f3b1b']

btn.addEventListener('click', function(){
    newFact(mushieArr)
})


function newFact(mushieArr){
    let num = Math.floor(Math.random() * mushieArr.length)
    factBoxText.innerText = mushieArr[num]
    mushieArr.splice(num, 1)
    if(mushieArr.length === 0){
        factBoxText.innerText = "So sorry, we're out of facts"
        btn.disabled = true
    }
    // change colour 
    let randCol = Math.floor(Math.random() * colour.length)
    factBox.style.backgroundColor = colour[randCol]
    colour.splice(randCol, 1)
    
    // change background
    
    let randBackG = Math.floor(Math.random() * photoArr.length)
    let image = photoArr[randBackG]
    main.style.backgroundImage= `url(${image})`;
    photoArr.splice(randBackG, 1)

    }



