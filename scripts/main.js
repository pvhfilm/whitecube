var currentSlide = 0;

var elem = document.querySelector('.grid');
var pckry = new Packery( elem, {
  // options
  itemSelector: '.grid-item',
  gutter: 10
});

// element argument can be a selector string
//   for an individual element
var pckry = new Packery( '.grid', {
  // options
});

var container = document.body;

console.log(container);

var thisTitle = "Conference";
var thisText = "";

function closeOverlay(){
	console.log('does this trigger?')
	var overlay = document.getElementsByClassName('overlay')[0];
	document.body.className = "";
	container.removeChild(overlay)
}


function insertOverlay(title, text, bgImg){
	document.body.className = "noscroll";

	console.log('bla');
	container.insertAdjacentHTML('afterbegin', '<div class="overlay"><div class="left ' + bgImg + '"><h1 class="overlay-kop">' + title + '</h1></div><div class="right"><div class="close-button"><img class="close-image" src="images/close.svg"/></div><p class="right-text">' + text + '</p></div></div>');

// var closeButton = document.getElementsByClassName('close-button')[0];
// console.log(closeButton);
// closeButton.addEventListener("click", closeOverlay);

	var closeButton = document.getElementsByClassName('close-button')[0];
	console.log(closeButton);
	closeButton.addEventListener("click", closeOverlay);

}


// insertOverlay('Conference', 'Ik ben makelaar in koffi, en woon op de Lauriergracht No 37. Het is mijn gewoonte niet, romans te schrijven, of zulke dingen, en het heeft dan ook lang geduurd, voor ik er toe overging een paar riem papier extra te bestellen, en het werk aan te vangen, dat gij, lieve lezer, zoâven in de hand hebt genomen, en dat ge lezen moet als ge makelaar in koffie zijt, of als ge wat anders zijt. Niet alleen dat ik nooit iets schreef wat naar een roman geleek, maar ik houd er zelfs niet van, iets dergelijks te lezen, omdat ik een man van zaken ben.')

var blockOneHandler = document.getElementsByClassName('grid-blockone')[0];
var blockTwoHandler = document.getElementsByClassName('grid-blocktwo')[0];
var blockThreeHandler = document.getElementsByClassName('grid-blockthree')[0];
var blockFourHandler = document.getElementsByClassName('grid-blocksix')[0];
var blockFiveHandler = document.getElementsByClassName('grid-blockfive')[0];
var blockEightHandler = document.getElementsByClassName('grid-blockeight')[0];
var blockTenHandler = document.getElementsByClassName('grid-blockten')[0];

blockOneHandler.addEventListener("click", function(){ insertOverlay('The OMA master-plan', 'The Office for Metropolitan Architecture (OMA) has developed, in close collaboration with local communities, a master-plan in which the development of three main activities of LIRCAEI – ‘Discuss’, ‘Produce’, ‘View’ – unfolds rationally in the existing habitat and forms the base of a new sustainable economic model for plantation workers and their families. Each of these zones encompasses one of the main engines for the inclusive development of the settlement: the experimental garden, the CATPC atelier and finally the white cube. <br/><br/>The establishment of LIRCAEI will entail significant infrastructural improvements of the site, benefiting the local communities: water clearance, sanitation, sustainable energy production, an Internet connection, the improvement of access roads and capacity building amongst plantation workers.<br/><br/>The project is overseen by their managing partner, architect David Gianotten. The executive architect is Arsene Ijambo, general secretary of the Association of the Architects of the Congo (SAC).', 'oma') }, false);
blockTwoHandler.addEventListener("click", function(){ insertOverlay('CATPC\'s experimental garden', 'INVENTORY OF CATPC’s EXPERIMENTAL GARDEN PURCHASED WITH FUNDS MADE FROM ART SALE PROFITS<br/><br/>Cocoa:<br/>6650 plants in good condition<br/Surface covered with distance of 10 feet between two plants: 14 acres<br/><br/>Palm Oil:<br/>801 plants in good conditon<br/>Surface covered with distance of 30 feet between two plants: 17 acres<br/><br/>Fruit trees (mix of different species including avocado, mandarin, pineapples and bananas):<br/>944 plants in good conditon<br/>Surface covered with distance of 32 feet between two plants: 15 acres<br/><br/>Material in stock:<br/>12 machetes, 2 wheelbarrows, 10 hoes, 10 beakers, 3 rakes, 5 watering cans, 7500 cocoa bags, 800 palm sachets, 2 notebooks, 5 pens, and 1 slat.<br/><br/>Agenda:<br/>February and mid March 2017: Planting of banana trees<br/>March 2017: Planting of the cocoa feet under banana trees<br/>September 2017: Planting of palm trees.<br/>May 2017: Planting of vegetables', 'garden') }, false);
blockThreeHandler.addEventListener("click", function(){ insertOverlay('The chocolate sculptures', 'Since 2014, the cooperative of plantation workers of CATPC has produced and exhibited figurative sculptures. The sculptures are first made in clay, after which they are 3D scanned and uploaded into the cloud.  They are then casted in chocolate made from cocoa originating from African plantations and sold in museums and galleries. Recent exhibitions include, amongst others, SculptureCentre in New York, Kunst-Werke Institute for Contemporary Art, Berlin, or the VanAbbeMuseum, Eindhoven.<br/><br/>Since 2016, the artistic production of CATPC has diversified and now includes performances, drawings, and videos. The cooperative is represented by KOW in Berlin, and Fons Welters in Amsterdam. So far, the sales of their artworks has grossed €150,000, resulting in a net profit of €50,000 for the cooperative. CATPC invests all profits into buying back land, where experimental, community-owned cocoa and palm oil gardens are established. This way profits stay within the community to finance further development.', 'chocolate') }, false);
blockFourHandler.addEventListener("click", function(){ insertOverlay('The online platform', 'A satellite Wi-Fi connection, installed in the White Cube museum designed by OMA, will transform the plantation in the Congolese forest in a centre for innovation and knowledge.<br/><br/>The platform will connect LIRCAEI’s research to plantations and museums around the world. Plugged into these international networks, the White Cube will transform the former palm oil plantation of Lusanga into a legitimization machine, investigating and relaying the strategies of resistance alongside visions for the future of plantation workers globally.<br/><br/>With just a few clicks, plantation workers and creative minds from around the world will get access to the catalogue of tools and resources gathered by prominent guest curators for discussion online. The quaterly program will be archived and made accessible in English, French and Lingala.<br/><br/>The platform is currently under construction and should be launched in October 2017. The development and production of the platform is supervised by Pieter van Huystee Film & TV.', 'platform') }, false);
blockFiveHandler.addEventListener("click", function(){ insertOverlay('Institute for Human Activities', 'The Institute for Human Activities (IHA) is a research project, initiated by a Dutch artist Renzo Martens and developed at the KASK – School of Arts in Ghent. IHA’s goal is to prove that artistic critique on economic inequality can redress it – not symbolically, but in material terms.<br/><br/>Through exhibitions, presentations and the instigation of critical reflection, the IHA is reaching out beyond the Research Centre in Congo. Furthermore, the IHA facilitates the global dissemination of the artworks created with the CATPC, the profits of which return directly Congo to support the makers and their families, as well as community projects in Lusanga.<br/><br/><em>Organisation</em><br/>Renzo Martens — Artistic Director<br/>Katrien Reist — Business Manager<br/>Suzanne Hoogewys — Congo Coordinator<br/>Laurens Otto — Associate Curator<br/>Nicolas Jolly— Research Coordinator<br/>Els Roelandt — Editor and curatorial advisor<br/>Christine de Baan — Strategic Advisor<br/><br/><em>Advisory Board</em><br/>Pierre Bismuth — Visual artist, Oscar winner for the best original screenplay for Eternal Sunshine of the Spotless Mind<br/>Charles Esche — Co-founder and co-editor of Afterall Journal, co-curator of the 9th International Istanbul Biennial, co-curator of the 31st São Paulo<br/>Biennial, Executive Director of the Van Abbemuseum, Eindhoven<br/>Serge Kakudji — Countertenor, winner of the 2008 Prix Jacques Dôme<br/>Joris Luyendijk — Author, correspondent, writer of the Joris Luyendijk Banking Blog for The Guardian, London<br/>René Ngongo — Biologist, recipient of the 2009 Right Livelihood Award, former director of Greenpeace Congo, Kinshasa<br/>Katrien Pype — Anthropologist, Fellow at the Department of African Studies and Anthropology at the University of Birmingham, and co-founder of the Congo Research Network<br/>Theo van Rompay — Deputy Director P.A.R.T.S., Brussels<br/>Yakubu Yahaya — Policy entrepreneur, team leader at Facility for Oil Sector Transparency and Reform in Nigeria, Abuja Partners<br/><br/><em>Board of Directors</em><br/>Jacqueline L. Gerritsma, president<br/>Hein P.M. van Woensel, secretary<br/>Jan Theo Krol, treasurer<br/>Boris R.C. Hilberdink, member<br/>Jos de Putter, member<br/>Guido P.J. van Staveren van Dijk, member<br/>Remco H.J. Polman, member<br/><br/><em>ANBI</em><br/>The Institute for Human Activities has been identified by the tax authorities as a <a href=\'https://en.wikipedia.org/wiki/Algemeen_nut_beogende_instelling\' class=\'a-black\'>public benefit organization:</a><br/>ANBI (Algemeen Nut Beogende Instelling).', 'institute') }, false);
blockEightHandler.addEventListener("click", function(){ insertOverlay('CERCLE D’ART DES TRAVAILLEURS DE PLANTATION CONGOLAISE', 'Was founded in 2014 to enhance the lives of its members and their families via creativity. The workshops conducted in Lusanga are lead by, Michel Ekeba, Mega Mingiedi, and Eléonore Hellio, three Kinshasa based artists. Its president is environmental and political activist René Ngongo, the founding director of Greenpeace Congo. In 2009, Ngongo received the Right Livelihood Award, known as ‘the alternative Nobel Prize’, for ‘his courage in confronting the forces that are destroying the Congo’s rainforests and building political support for their conservation and sustainable use.’<br/><br/>The CATPC Artists’ Biographies<br/><br/><em>Mathieu Kasiama</em><br/>Mathieu Kasiama was born in 1979, he is married and has four children. He earns about ten dollars a month as an itinerant hairdresser and he manages to feed his family thanks to his ponds and fields, selling off some of what he grows in order to buy other necessities. He lives with his wife, their children, and his mother in a small brick house built during the era of the PLZ (Plantations Lever Zaïre or Lever Plantations in Zaïre). His monthly rent is 1500 Congolese Francs, which he pays to the group that bought the now shut-down factory. He cannot read or write, but he has an excellent command of Kikongo, his native language: he knows old and learned words that many have forgotten, like fio fio, which means “the one who puts ideas into the world and transmits them,” and which could be translated to: “the one who gives concepts.” Mathieu has invested part of the profits of the sales of chocolate sculptures in a poultry farm.<br/><br/><em>Mbuku Kimpala</em><br/>Mbuku Kimpala was born in Masi-Manimba, in the Bandundu province. She is twenty years old, the mother of four children with a fifth one on the way, and she also takes care of the two children of her older brother. Mbuku and her family arrived in Lusanga in 2008 to work with her husband’s uncle, who has a farm there.<br/><br/>Mbuku trades fish and zucchini between Kikwit and Lusanga, an activity that brings in around thirty thousand Congolese Francs a month for her. The family makes ends meet in the best possible way. For her, the sculpture work has saved her family, because it helps them to pay for rent, water, and the children’s school fees. The studio has thus become a place where she can express what’s on her mind, where her intelligence can be manifest, and where she has been getting to know the material in the region. She says there aren’t any other places to study this. Mbuku has invested part of the profits of the sales of chocolate sculptures in the installation of a corn and manioc mill in Lusanga.<br/><br/><em>Emery Mohamba</em><br/>Emery was named after the great, assassinated leader, Emery Lumumba. He was born in Bandundu in 1970. A father of eight children, he lives with his wife in the village of Kivanda, about seventeen kilometres from Lusanga. His father worked as a cutter for the PLZ from 1980 to 1990, when the company was suddenly sold and the factory shut down. Shortly after marrying, Emery Mohamba started studying commerce at a school run by Catholic missionaries in Pindi. But his teachers there discouraged him from continuing. He suffered from headaches, which the teachers attributed to the strenuous mental calculations needed for this sort of study, and Emery Mohamba did not have the financial means to seek treatment, or indeed to pay the school fees. He returned to his village, where he learned to sow in order not to depend on the money his wife brought in with her small manioc business. Emery has invested part of the profits of the sales of chocolate sculptures in the creation of a small general store.<br/><br/><em>Cedrick Tamasala</em><br/>Cedrick Tamasala was born in Katanga in 1986 and is father to one child. These past few years, Cedrick has been living in Kinshasa, where he completed a year of studies at the Académie des Beaux-Arts. He had to drop his studies at the end of his first year because of the enormous pressure his uncles and aunts were putting on him: they disapproved of dreadlocks (the rasta hairstyle) and of the artist life. Still, he was able to meet two great figures of popular painting, Cheri Cherin and Cheri Samba, who passed on to him the desire to paint. Cedric has always drawn, even though his family always discouraged him from doing so.<br/><br/>At his father’s urging, he settled in Lusanga less then a year ago, to rediscover his roots and to work for the NGO run by his uncle, who is the Député Provincial du Bandundu. There, he was tasked with watching over the house and with supervising the breeding work (pigs and rabbits), but it was up to him to figure out how to keep himself fed. To that end he started a small business selling palm oil with his older brother, who had stayed in Kinshasa. He would buy palm oil from the owners of traditional presses in the surroundings of Lusanga. Cedric has invested part of the profits of the sales of chocolate sculptures in the creation of fish farm.<br/><br/><em>Daniel Manenga</em><br/>Manenga was born in Lusanga in 1975, is married, and is the father of six children. He is a farmer and blacksmith, and he has also traded in palm oil since 1992, harvesting the nut in the forest that his family clan is allowed to farm. He has also invented a scaffolding system that makes it possible to climb palm trees more easily. For a twenty-five liter can of palm oil, you need twenty-one good clusters of nuts. Harvesting that represents four days of hard labor, after which come another two days to assemble the bunches, and one long day for pressing. Once harvested and gathered into bunches, the nuts are taken to the pressers, and the oil is sold in twenty-five liter cans at low prices (between nine and ten thousand Congolese Francs) to buyers who act as intermediaries for companies because they have pirogues, cars, or trucks, which they expect to fill to capacity with palm oil and take to the city. These buyers sell the oil to a company based in Kikwit whose small factory makes dishwashing and laundry soap. Manenga makes between thirty-six and fifty thousand Francs a month with his palm oil business. As a blacksmith, he makes sheet metal and metal buckets.<br/>Daniel has invested part of the profits of the sales of chocolate sculptures in the creation of a photography shop.<br/><br/><em>Thomas Leba</em><br/>Thomas Leba was born in the village of Kisumba Nko, in the Bandundu region, in 1962. He is married and has nine children. He moved to Lusanga in 1980 to study woodworking with the Sisters of the Institut Kisala. Today, he is a carpenter and farmer. He makes chairs, mats, tool handles, canes, dressers, and doors. He grows corn, groundnut, and dry beans, because they are easy to plant. Both his father and grandfather worked at the PLZ. His grandfather sold palm oil at a market that the PLZ had set up in the company’s central cafeteria in the 1970s and 80s. He worked there for thirty years and retired with a pension when he was sixty years old. He is still alive and is eighty-six years old today. His father was a cutter; he died in 2004 after suffering enormously from chills that, he thought, had been caused by those who envied his goods—his ponds and his small pineapple plantations. Thomas has invested part of the profits of the sales of chocolate sculptures in the creation of a fish store.<br/><br/><em>Djo Bismar</em><br/>Djo Bismar is father to three children. He didn’t know anything about sculpture work when he first showed up at the studio. He admitted that he did not understand anything of what was going on but, little by little, he became aware of the value of what he was doing there. He explains he became the object of a lot of jealousy when becoming the antenna of the CATPC in Lusanga as people found out that his sculpture had been shown in Europe. And yet, this sculpture had not been sold for a load of cash. For him, the CATPC represents a chance to learn and to hope for a more comfortable life. He thinks that if he stopped making sculptures he would have the impression that he had accomplished nothing. His work shows both joy and distress, and it’s important for him.<br/>Djo has invested part of the profits of the sales of chocolate sculptures in the creation of a general store.<br/><br/><em>Jeremie Mabiala</em><br/>Jeremie Mabiala was rborn in 1950 in the Bas-Congo, in the village of Kiyenge-Kiama, in the area of Tshela. Married, he has five sons and three daughters. He started studying agriculture at the technical school in Likala, but had to stop when he was around fifteen years old, following the death of his father. He returned to his native village to learn wood sculpture with his brother. After a three-year apprenticeship, he set up his own studio and started taking in apprentices himself. He lives from his art, which he sells in his own province, as well as in neighboring countries. He has had some difficult moments trying to live from his art, and he has taken considerable risks crossing borders, travelling a lot in old buses, and doing so during times of political unrest.  As a farmer, he decided to invest in agriculture to produce cacao, coffee, rubber trees, and palm trees. He sells his cacao to La Société de Cultures et d\'Industries Agricoles au Mayumbe (SCAM), the company of Mr. Blaknair, for five hundred Congolese Francs per kilo.<br/>Jeremie has invested part of the profits of the sales of chocolate sculptures in the creation of a general store.<br/><br/><em>Armand Ngudikienda, alias Meya</em><br/>Armand Ngudikienda was born in 1938 in the Bas-Congo, in Tshela. He is the father of two sons and three daughters. He is nicknamed Meya, which, in his native tongue means “small bill,” because, courageous as he is, he has never lacked a small bill to survive. At fifteen, he was hired as a cook for a certain Mr. Ruth, who worked for a company called SCAM. After two years in his employ, Meya decided to return to his village to learn wood sculpture, which he did for five years with Mr. Alphonse Nzau. He then opened his own studio, and over the years he trained dozens of his own apprentices. Also a farmer, he divides his time between farming and wood sculpting. He produces two hundred kilos of cacao a year, which he sells to various companies, like SCAM or COKEMA (d’Exploitants Miniers et Artisanale), for five hundred Congolese Francs per kilo. He manages to live from day to day thanks to his cacao.<br/>Meya has invested part of the profits of the sales of chocolate sculptures in the creation of a general store.<br/><br/><em>Jean Kawata</em><br/>Jean Kawata was born in 1980 in Kingangu, which was at the time one of the housing quarters for PLZ workers, and is where the IHA and the CATPC are today. His father worked for the PLZ and is still living in Kingangu. Jean is the father of five children. He earned a diploma as woodworker but, since he has no materials, he must wait for clients to come to him and bring the materials themselves, and that only happens rarely. He uses a lot of animal forms in his work, sculpting them onto his furniture as a way to transmit messages. To make a living, he works as a palm nut cutter. He presses the nuts himself using traditional presses, and sells the oil to the soap manufacturer SILFO. He sells two twenty-five liter cans a month for eight thousand Congolese Francs each. Although he comes from the Mbala people he identifies with the Pende people, which he grew up among. He learned their language and their customs. He also learned some healing practices from them, and sometimes he wears the Pende mask of Tundu that he sculpted himself. For him, the Pende are the people who keep, to this day, the power of the most powerful ancestors in the DRC.<br/>Jean is currently doing an internship to integrate CATPC.<br/><br/><em>Irene Kanga</em><br/>Irene Kanga was born in 1994 and has two children. She earned a state diploma (given at the completion of secondary school) in Pedagogy, a discipline chosen by her mother because it was the most affordable. She lives in the Banga Banga neighborhood of Lusanga, in the ancient housing quarters for PLZ workers. She was attracted to the clay modeling at the CATPC because of its malleability. She participated in the first workshop at the CATPC, and she even inaugurated her creation with her sister Huguette Kilembi. But then, for a variety of family reasons, Irene stopped coming for two years. She eventually returned to the CATPC in June 2016. At that moment, she was working with sculpture and drawing. She studied the sexual positions that could best render the form of a man forcing himself on a woman. Her works talk about the rape of a Pende woman at the hands of a certain Mr Balot—one of the events that caused the great revolt of 1931. She chose to work on the subject of sexual violence because a man tried to rape her in the forest when she was eight years old. Thankfully, an older man heard her screams and rescued her. It’s a problem that threatens many girls in the village today. Irene wants to shout it to the world.<br/>Irene is currently doing an internship to integrate CATPC.', 'catpc') }, false);
blockTenHandler.addEventListener("click", function(){ insertOverlay('Location', 'The location of the research center is of key importance: LIRCAEI is constructed in Lusanga, formerly Leverville, where the Lever Brothers (later Unilever) founded their very first palm oil plantation in 1911. <br/><br/>In economic terms, plantations have funded not just the building of most European and American infrastructure and industries, but also that of museums and universities. On an ideological level, the violence and brutality unfolding on one side—the plantation zones—has informed and haunted the civility, taste, and aesthetics championed at the other: the White Cubes.<br/><br/>By colliding these two opposite poles of global value chains with each other, LIRCAEI aims to overcome both the monoculture of the plantation system that exhausts people, the environment, and the sterility of the White Cube – a free haven for critique, love, and singularity, but more often than not, which reaffirms class divides.<br/><br/>It is only from here, in the heart of the plantation system and at the crossroads of global inequality and climatological change, that we may redefine the mandate of art.', 'location') }, false);
// blockTwoHandler.addEventListener("click", insertOverlay('bla', 'blablabla'));

var leftLogo = document.getElementsByClassName('left-logo')[0];
var rightLogo = document.getElementsByClassName('right-logo')[0];

leftLogo.addEventListener("click", function(){ insertOverlay('CERCLE D’ART DES TRAVAILLEURS DE PLANTATION CONGOLAISE', 'Was founded in 2014 to enhance the lives of its members and their families via creativity. The workshops conducted in Lusanga are lead by, Michel Ekeba, Mega Mingiedi, and Eléonore Hellio, three Kinshasa based artists. Its president is environmental and political activist René Ngongo, the founding director of Greenpeace Congo. In 2009, Ngongo received the Right Livelihood Award, known as ‘the alternative Nobel Prize’, for ‘his courage in confronting the forces that are destroying the Congo’s rainforests and building political support for their conservation and sustainable use.’<br/><br/>The CATPC Artists’ Biographies<br/><br/><em>Mathieu Kasiama</em><br/>Mathieu Kasiama was born in 1979, he is married and has four children. He earns about ten dollars a month as an itinerant hairdresser and he manages to feed his family thanks to his ponds and fields, selling off some of what he grows in order to buy other necessities. He lives with his wife, their children, and his mother in a small brick house built during the era of the PLZ (Plantations Lever Zaïre or Lever Plantations in Zaïre). His monthly rent is 1500 Congolese Francs, which he pays to the group that bought the now shut-down factory. He cannot read or write, but he has an excellent command of Kikongo, his native language: he knows old and learned words that many have forgotten, like fio fio, which means “the one who puts ideas into the world and transmits them,” and which could be translated to: “the one who gives concepts.” Mathieu has invested part of the profits of the sales of chocolate sculptures in a poultry farm.<br/><br/><em>Mbuku Kimpala</em><br/>Mbuku Kimpala was born in Masi-Manimba, in the Bandundu province. She is twenty years old, the mother of four children with a fifth one on the way, and she also takes care of the two children of her older brother. Mbuku and her family arrived in Lusanga in 2008 to work with her husband’s uncle, who has a farm there.<br/><br/>Mbuku trades fish and zucchini between Kikwit and Lusanga, an activity that brings in around thirty thousand Congolese Francs a month for her. The family makes ends meet in the best possible way. For her, the sculpture work has saved her family, because it helps them to pay for rent, water, and the children’s school fees. The studio has thus become a place where she can express what’s on her mind, where her intelligence can be manifest, and where she has been getting to know the material in the region. She says there aren’t any other places to study this. Mbuku has invested part of the profits of the sales of chocolate sculptures in the installation of a corn and manioc mill in Lusanga.<br/><br/><em>Emery Mohamba</em><br/>Emery was named after the great, assassinated leader, Emery Lumumba. He was born in Bandundu in 1970. A father of eight children, he lives with his wife in the village of Kivanda, about seventeen kilometres from Lusanga. His father worked as a cutter for the PLZ from 1980 to 1990, when the company was suddenly sold and the factory shut down. Shortly after marrying, Emery Mohamba started studying commerce at a school run by Catholic missionaries in Pindi. But his teachers there discouraged him from continuing. He suffered from headaches, which the teachers attributed to the strenuous mental calculations needed for this sort of study, and Emery Mohamba did not have the financial means to seek treatment, or indeed to pay the school fees. He returned to his village, where he learned to sow in order not to depend on the money his wife brought in with her small manioc business. Emery has invested part of the profits of the sales of chocolate sculptures in the creation of a small general store.<br/><br/><em>Cedrick Tamasala</em><br/>Cedrick Tamasala was born in Katanga in 1986 and is father to one child. These past few years, Cedrick has been living in Kinshasa, where he completed a year of studies at the Académie des Beaux-Arts. He had to drop his studies at the end of his first year because of the enormous pressure his uncles and aunts were putting on him: they disapproved of dreadlocks (the rasta hairstyle) and of the artist life. Still, he was able to meet two great figures of popular painting, Cheri Cherin and Cheri Samba, who passed on to him the desire to paint. Cedric has always drawn, even though his family always discouraged him from doing so.<br/><br/>At his father’s urging, he settled in Lusanga less then a year ago, to rediscover his roots and to work for the NGO run by his uncle, who is the Député Provincial du Bandundu. There, he was tasked with watching over the house and with supervising the breeding work (pigs and rabbits), but it was up to him to figure out how to keep himself fed. To that end he started a small business selling palm oil with his older brother, who had stayed in Kinshasa. He would buy palm oil from the owners of traditional presses in the surroundings of Lusanga. Cedric has invested part of the profits of the sales of chocolate sculptures in the creation of fish farm.<br/><br/><em>Daniel Manenga</em><br/>Manenga was born in Lusanga in 1975, is married, and is the father of six children. He is a farmer and blacksmith, and he has also traded in palm oil since 1992, harvesting the nut in the forest that his family clan is allowed to farm. He has also invented a scaffolding system that makes it possible to climb palm trees more easily. For a twenty-five liter can of palm oil, you need twenty-one good clusters of nuts. Harvesting that represents four days of hard labor, after which come another two days to assemble the bunches, and one long day for pressing. Once harvested and gathered into bunches, the nuts are taken to the pressers, and the oil is sold in twenty-five liter cans at low prices (between nine and ten thousand Congolese Francs) to buyers who act as intermediaries for companies because they have pirogues, cars, or trucks, which they expect to fill to capacity with palm oil and take to the city. These buyers sell the oil to a company based in Kikwit whose small factory makes dishwashing and laundry soap. Manenga makes between thirty-six and fifty thousand Francs a month with his palm oil business. As a blacksmith, he makes sheet metal and metal buckets.<br/>Daniel has invested part of the profits of the sales of chocolate sculptures in the creation of a photography shop.<br/><br/><em>Thomas Leba</em><br/>Thomas Leba was born in the village of Kisumba Nko, in the Bandundu region, in 1962. He is married and has nine children. He moved to Lusanga in 1980 to study woodworking with the Sisters of the Institut Kisala. Today, he is a carpenter and farmer. He makes chairs, mats, tool handles, canes, dressers, and doors. He grows corn, groundnut, and dry beans, because they are easy to plant. Both his father and grandfather worked at the PLZ. His grandfather sold palm oil at a market that the PLZ had set up in the company’s central cafeteria in the 1970s and 80s. He worked there for thirty years and retired with a pension when he was sixty years old. He is still alive and is eighty-six years old today. His father was a cutter; he died in 2004 after suffering enormously from chills that, he thought, had been caused by those who envied his goods—his ponds and his small pineapple plantations. Thomas has invested part of the profits of the sales of chocolate sculptures in the creation of a fish store.<br/><br/><em>Djo Bismar</em><br/>Djo Bismar is father to three children. He didn’t know anything about sculpture work when he first showed up at the studio. He admitted that he did not understand anything of what was going on but, little by little, he became aware of the value of what he was doing there. He explains he became the object of a lot of jealousy when becoming the antenna of the CATPC in Lusanga as people found out that his sculpture had been shown in Europe. And yet, this sculpture had not been sold for a load of cash. For him, the CATPC represents a chance to learn and to hope for a more comfortable life. He thinks that if he stopped making sculptures he would have the impression that he had accomplished nothing. His work shows both joy and distress, and it’s important for him.<br/>Djo has invested part of the profits of the sales of chocolate sculptures in the creation of a general store.<br/><br/><em>Jeremie Mabiala</em><br/>Jeremie Mabiala was rborn in 1950 in the Bas-Congo, in the village of Kiyenge-Kiama, in the area of Tshela. Married, he has five sons and three daughters. He started studying agriculture at the technical school in Likala, but had to stop when he was around fifteen years old, following the death of his father. He returned to his native village to learn wood sculpture with his brother. After a three-year apprenticeship, he set up his own studio and started taking in apprentices himself. He lives from his art, which he sells in his own province, as well as in neighboring countries. He has had some difficult moments trying to live from his art, and he has taken considerable risks crossing borders, travelling a lot in old buses, and doing so during times of political unrest.  As a farmer, he decided to invest in agriculture to produce cacao, coffee, rubber trees, and palm trees. He sells his cacao to La Société de Cultures et d\'Industries Agricoles au Mayumbe (SCAM), the company of Mr. Blaknair, for five hundred Congolese Francs per kilo.<br/>Jeremie has invested part of the profits of the sales of chocolate sculptures in the creation of a general store.<br/><br/><em>Armand Ngudikienda, alias Meya</em><br/>Armand Ngudikienda was born in 1938 in the Bas-Congo, in Tshela. He is the father of two sons and three daughters. He is nicknamed Meya, which, in his native tongue means “small bill,” because, courageous as he is, he has never lacked a small bill to survive. At fifteen, he was hired as a cook for a certain Mr. Ruth, who worked for a company called SCAM. After two years in his employ, Meya decided to return to his village to learn wood sculpture, which he did for five years with Mr. Alphonse Nzau. He then opened his own studio, and over the years he trained dozens of his own apprentices. Also a farmer, he divides his time between farming and wood sculpting. He produces two hundred kilos of cacao a year, which he sells to various companies, like SCAM or COKEMA (d’Exploitants Miniers et Artisanale), for five hundred Congolese Francs per kilo. He manages to live from day to day thanks to his cacao.<br/>Meya has invested part of the profits of the sales of chocolate sculptures in the creation of a general store.<br/><br/><em>Jean Kawata</em><br/>Jean Kawata was born in 1980 in Kingangu, which was at the time one of the housing quarters for PLZ workers, and is where the IHA and the CATPC are today. His father worked for the PLZ and is still living in Kingangu. Jean is the father of five children. He earned a diploma as woodworker but, since he has no materials, he must wait for clients to come to him and bring the materials themselves, and that only happens rarely. He uses a lot of animal forms in his work, sculpting them onto his furniture as a way to transmit messages. To make a living, he works as a palm nut cutter. He presses the nuts himself using traditional presses, and sells the oil to the soap manufacturer SILFO. He sells two twenty-five liter cans a month for eight thousand Congolese Francs each. Although he comes from the Mbala people he identifies with the Pende people, which he grew up among. He learned their language and their customs. He also learned some healing practices from them, and sometimes he wears the Pende mask of Tundu that he sculpted himself. For him, the Pende are the people who keep, to this day, the power of the most powerful ancestors in the DRC.<br/>Jean is currently doing an internship to integrate CATPC.<br/><br/><em>Irene Kanga</em><br/>Irene Kanga was born in 1994 and has two children. She earned a state diploma (given at the completion of secondary school) in Pedagogy, a discipline chosen by her mother because it was the most affordable. She lives in the Banga Banga neighborhood of Lusanga, in the ancient housing quarters for PLZ workers. She was attracted to the clay modeling at the CATPC because of its malleability. She participated in the first workshop at the CATPC, and she even inaugurated her creation with her sister Huguette Kilembi. But then, for a variety of family reasons, Irene stopped coming for two years. She eventually returned to the CATPC in June 2016. At that moment, she was working with sculpture and drawing. She studied the sexual positions that could best render the form of a man forcing himself on a woman. Her works talk about the rape of a Pende woman at the hands of a certain Mr Balot—one of the events that caused the great revolt of 1931. She chose to work on the subject of sexual violence because a man tried to rape her in the forest when she was eight years old. Thankfully, an older man heard her screams and rescued her. It’s a problem that threatens many girls in the village today. Irene wants to shout it to the world.<br/>Irene is currently doing an internship to integrate CATPC.', 'catpc') }, false);
rightLogo.addEventListener("click", function(){ insertOverlay('Institute for Human Activities', 'The Institute for Human Activities (IHA) is a research project, initiated by a Dutch artist Renzo Martens and developed at the KASK – School of Arts in Ghent. IHA’s goal is to prove that artistic critique on economic inequality can redress it – not symbolically, but in material terms.<br/><br/>Through exhibitions, presentations and the instigation of critical reflection, the IHA is reaching out beyond the Research Centre in Congo. Furthermore, the IHA facilitates the global dissemination of the artworks created with the CATPC, the profits of which return directly Congo to support the makers and their families, as well as community projects in Lusanga.<br/><br/><em>Organisation</em><br/>Renzo Martens — Artistic Director<br/>Katrien Reist — Business Manager<br/>Suzanne Hoogewys — Congo Coordinator<br/>Laurens Otto — Associate Curator<br/>Nicolas Jolly— Research Coordinator<br/>Els Roelandt — Editor and curatorial advisor<br/>Christine de Baan — Strategic Advisor<br/><br/><em>Advisory Board</em><br/>Pierre Bismuth — Visual artist, Oscar winner for the best original screenplay for Eternal Sunshine of the Spotless Mind<br/>Charles Esche — Co-founder and co-editor of Afterall Journal, co-curator of the 9th International Istanbul Biennial, co-curator of the 31st São Paulo<br/>Biennial, Executive Director of the Van Abbemuseum, Eindhoven<br/>Serge Kakudji — Countertenor, winner of the 2008 Prix Jacques Dôme<br/>Joris Luyendijk — Author, correspondent, writer of the Joris Luyendijk Banking Blog for The Guardian, London<br/>René Ngongo — Biologist, recipient of the 2009 Right Livelihood Award, former director of Greenpeace Congo, Kinshasa<br/>Katrien Pype — Anthropologist, Fellow at the Department of African Studies and Anthropology at the University of Birmingham, and co-founder of the Congo Research Network<br/>Theo van Rompay — Deputy Director P.A.R.T.S., Brussels<br/>Yakubu Yahaya — Policy entrepreneur, team leader at Facility for Oil Sector Transparency and Reform in Nigeria, Abuja Partners<br/><br/><em>Board of Directors</em><br/>Jacqueline L. Gerritsma, president<br/>Hein P.M. van Woensel, secretary<br/>Jan Theo Krol, treasurer<br/>Boris R.C. Hilberdink, member<br/>Jos de Putter, member<br/>Guido P.J. van Staveren van Dijk, member<br/>Remco H.J. Polman, member<br/><br/><em>ANBI</em><br/>The Institute for Human Activities has been identified by the tax authorities as a <a href=\'https://en.wikipedia.org/wiki/Algemeen_nut_beogende_instelling\' class=\'a-black\'>public benefit organization:</a><br/>ANBI (Algemeen Nut Beogende Instelling).', 'institute') }, false);


window.onload = function() {

	var header = document.getElementsByClassName('header--heading')[0];
	var introduction = document.getElementsByClassName('header--details')[0];
	var details = document.getElementsByClassName('header--specificdetails')[0];
	var detailsMore = document.getElementsByClassName('header--specificdetails')[1];
	var scrollArrow = document.getElementsByClassName('scrolldown')[0];

	TweenMax.to(header, 1, {
		y: -5,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});

	TweenMax.to(introduction, 1, {
		y: -5,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: 2
	});

	TweenMax.to(details, 1, {
		y: -5,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: 3
	});

	TweenMax.to(detailsMore, 1, {
		y: -5,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: 3.7
	});

var tlArrow = new TimelineMax({delay:4, repeat:1000, repeatDelay:0});


	tlArrow.to(scrollArrow, 1, {
		y: 10,
		opacity: 1,
		ease: Power1.easeInOut,
	});

	tlArrow.to(scrollArrow, 1, {
		y: 0,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});	

	tlArrow.to(scrollArrow, 1, {
		y: 10,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});	

	tlArrow.to(scrollArrow, 1, {
		y: 0,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});	
	
	tlArrow.to(scrollArrow, 1, {
		y: 10,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});		

	tlArrow.to(scrollArrow, 1, {
		y: 0,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});	
	
	tlArrow.to(scrollArrow, 1, {
		y: 10,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});	

	tlArrow.to(scrollArrow, 1, {
		y: 0,
		opacity: 1,
		ease: Power1.easeInOut,
		delay: .5
	});	
	
	tlArrow.to(scrollArrow, 1, {
		y: 10,
		opacity: 0,
		ease: Power1.easeInOut,
		delay: .5
	});			

}

$(window).scroll(function(){

	var ScrollTop = $(window).scrollTop();
	console.log(ScrollTop);
	var height = window.innerHeight * 2;

if (ScrollTop > height){
  $('.nav--left').addClass('nav--black'); 
  $('.nav--lang').addClass('nav--black'); 
  $('.linklink').addClass('nav--black'); 
  $('.links').addClass('nav--black'); 
} else {
  $('.nav--left').removeClass('nav--black'); 
  $('.nav--lang').removeClass('nav--black'); 
  $('.linklink').removeClass('nav--black'); 
  $('.links').removeClass('nav--black'); 
}

// if (ScrollTop > window.innerHeight) {
// 	currentSlide = 1
// 	console.log('current slide about');
// } else if (ScrollTop > (window.innerHeight * 2.5)) {
// 	currentSlide = 2
// 	console.log('current slide visit');
// } else if (ScrollTop > (window.innerHeight * 3)) {
// 	currentSlide = 3
// 	console.log('current slide exhibition');
// }


});


var upReveal = {
reset: true, duration: 2000, delay: 100, origin: 'bottom', distance: '20px', opacity: 0, scale: 1
};

var leftReveal = {
reset: false, duration: 2000, delay: 500, origin: 'left', distance: '200px', opacity: .3, scale: 1
}

var rightReveal = {
reset: false, duration: 2000, delay: 500, origin: 'right', distance: '200px', opacity: .3, scale: 1
}


window.sr = ScrollReveal();
sr.reveal('.first-text', upReveal);
sr.reveal('.second-text', upReveal);
sr.reveal('.third-text', upReveal);
sr.reveal('.program', upReveal);
sr.reveal('.grid-item', upReveal);
sr.reveal('.visit', upReveal);
sr.reveal('.image-fit', upReveal);

sr.reveal('.image-full', leftReveal);
sr.reveal('.anim-right', rightReveal);


var arrow = document.getElementsByClassName('scrolldown')[0];
arrow.addEventListener("click", function() {nextSlide()});

function nextSlide(){
	currentSlide++
	console.log('klik')

	changePosition();
}

function changePosition(){
	var hostname = location.hostname;

	console.log(hostname);
	console.log(currentSlide);

	if (currentSlide == 1 ) {
		window.location.assign("#introduction");
	} else if (currentSlide == 2) {
		window.location.assign("#visit");
	} else if (currentSlide == 3) {
		window.location.assign("#exhibition");
	} else if (currentSlide == 4) {
		window.location.assign("#research");
	}
}

