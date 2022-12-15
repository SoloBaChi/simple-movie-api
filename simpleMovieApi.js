const latestMovies = [
	{
		title:'wakanda',
		author:"chima",
		publishedDate:new Date().toISOString()
	},
	{
		title:'blackpanter',
		author:"pactrick",
        publishedDate:new Date("06 October 2009 12:46 UTC").toISOString()
    },
	{
		title:'woman king',
		author:"josh king",
		publishedDate:new Date("07 July 2013 11:46 UTC").toISOString()
	},
	{
		title:'shamp',
		author:"shikis",
		publishedDate:new Date("08 June 2001 10:46 UTC").toISOString()
	},
	{
		title:'my village people',
		author:"village kid",
		publishedDate:new Date("01 May 2022 13:46 UTC").toISOString()
	}
	];


	const trendingMovies = [
	{
		title:'black adam',
		author:"adam",
		publishedDate:new Date("01 July 2011 12:11 UTC").toISOString()
	},
	{
		title:'living in bondage',
		author:"williams kizzy",
		publishedDate:new Date("05 May 2016 09:18 UTC").toISOString()
	},
	{
		title:'the gatekepers',
		author:"kingsley david",
		publishedDate:new Date("01 May 2018 04:46 UTC").toISOString()
	},
	{
		title:'mobis',
		author:"solomon baba",
		publishedDate:new Date("06 May 2019 02:46 UTC").toISOString()
	}
	];
	

	const totalMovies = latestMovies.concat(trendingMovies);
	
	const movieApi = [];

    for([key,val] of totalMovies.entries()){
     movieApi.push(val.title)
    }
	class Movie{
	constructor(name,age,location){
	this.name = name;
	this.age = age;
	this.location = location;
	}
	downloadMovie(){
    const askAgeNum = confirm('Are you eligible to download movie from this site?');
    if(askAgeNum && this.age > 18){
    const movieToDownload = prompt("Enter movie name");
    (movieApi.indexOf(movieToDownload) == -1) ? alert('movie not found!!!') :
     alert(`downloading ${movieToDownload} from our shop....`)

    }
    else{
    alert("You are not eligibleto download movie from this site!!")
    }
	}
	uploadMovie(movieDetails = {}){
    latestMovies.push(movieDetails);
    totalMovies.push(movieDetails);
	}
	}

	// upload movie class
	class UploadMovie{
	constructor(title,author,publishedDate){
	this.title = title;
	this.author = author;
	this.publishedDate = publishedDate;
	}
	}

  const firstUpload = new UploadMovie("mama is strong",'kelvin eze','2011-23-2')

  const vistor1 = new Movie("solomon",19,'Nsukka');

  console.log(vistor1)

  vistor1.downloadMovie();
  vistor1.uploadMovie(firstUpload)

  console.log(totalMovies)