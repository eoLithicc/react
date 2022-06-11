import experience1 from "../../media/card1.png";
import experience2 from "../../media/card2.png";
import experience3 from "../../media/card3.png";

export const experiencesData = [
	{
		id: 1,
		title: "Life Lessons with Katie Zaferes",
		description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
		price: 136,
		img: experience1,
		stats: {
			rating: 5.0,
			reviewCount: 6
		},
		location: "Online",
		openSpots: 0,
		country: 'USA',
	},
	{
		id: 2,
		title: "Learn Wedding Photography",
		description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
		price: 125,
		img: experience2,
		stats: {
			rating: 5.0,
			reviewCount: 30
		},
		location: "Online",
		openSpots: 27,
		country: 'USA',
	},
	{
		id: 3,
		title: "Group Mountain Biking",
		description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
		price: 50,
		img: experience3,
		stats: {
			rating: 4.8,
			reviewCount: 2
		},
		location: "Norway",
		openSpots: 3,
		country: 'USA',
	}
];
