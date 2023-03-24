Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['FreeandOpenIndoPacific','Readiness','FriendsPartnersAllies','DefendCordilleraPH','38thCordilleraDay','CordiDayInMetroManila2022','UnitedNorth2022','PacificOcean','Balikatan22','KordilyeraAgkaykaysa',],
datasets : [
{
label: 'Hashtag (Balikatan_2022_Reduced)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.281891,0.237388,0.172389,0.156814,0.150684,0.147753,0.135752,0.129409,0.12292,]
},
]
}
var context = document.getElementById('Balikatan_2022_TwitterBalikatan_2022_Reduced-Hashtag-overall-top-ranked-barchart').getContext("2d");
var chart = new Chart(context, {
		type: 'bar',
		data: data,
		options: {
			indexAxis:'y',
			autowidth:false,
			scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

