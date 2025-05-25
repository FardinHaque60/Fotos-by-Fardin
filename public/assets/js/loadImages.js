/*
    Adding Image Protocol:
        - to add an image, add it to the public/images/ with the format IMG_i.JPG format
        - add the image metadata to the END of the variable `imageMeta` below
        - to test how site would work, change all '/image/IMG_...' tags by appending public/ for testing purposes 
            (vercel needs us to omit the public/ for hosting though)
    Done! The image should be visible on the page and able to be clicked
*/

const gallery = document.getElementById('main');

const imageMeta = [
    { title: "Yellow Flowers", description: "A nice bush of yellow flowers nearby. Taken August 24th, 2023." },
    { title: "Dark Rose", description: "This rose was lookin immaculate in the evening. Taken August 24th, 2023." },
    { title: "Perfect Timing", description: "Scenic shot of my desk. Taken August 25th, 2023." },
    { title: "NOT INCLUDED"},
    { title: "Pink Rose", description: "Nice rose angle. Taken August 29th, 2023." },
    { title: "Night", description: "Was trying to get a good shot of the moon, couldn't get one so I ended up settling for railing. Taken August 30th, 2023." },
    { title: "Low Light", description: "High exposure shot of some knick-knacks in the house. Taken August 30th, 2023." },
    { title: "NOT INCLUDED"},
    { title: "NOT INCLUDED"},
    { title: "Bloom", description: " Flowers blooming in peak fall 🙂. Taken September 4th, 2023." },
    { title: "NOT INCLUDED"},
    { title: "Smooth Landing", description: "Focus needs some work, but I'll get some better ones eventually. Taken September 4th, 2023." },
    { title: "Calaveras Hills", description: " These hills have been on fire, had snow, and been green almost all in one year. Taken September 4th, 2023." },
    { title: "Sunset", description: " Nice shadow affect on this one. Taken September 4th, 2023." },
    { title: "Dog ID", description: "Dog got his ID pic taken. Taken December 23rd, 2023." },
    { title: "Smoovin'", description: "Very energetic dog. Taken December 23rd, 2023." },
    { title: "Santa Monica Blvd.", description: "Where the sidewalk ends? Pacific Ocean according to Santa Monica Blvd. Taken on December 30th, 2023." },
    { title: "Hollywood", description: " Sign view from the Griffith Observatory Trail. Taken on December 30th, 2023." },
    { title: "Griffith Observatory", description: "Shot of the observatory from the trail. Taken December 30th, 2023." },
    { title: "Moon", description: "🌚. Taken January 25th, 2024." },
    { title: "Hot Water", description: "Was waiting for this hot water to cool down a bit. Taken April 5th, 2024." },
    { title: "Candle", description: "Candle drippin' too hard. Taken November 2nd, 2024." },
    { title: "Concentrated Cane Sugar", description: "Whatchu' know about that jaggery GOOR. Taken November 2nd, 2024." },
    { title: "Squirrel", description: "Practicing the wildlife shots. Taken May 22, 2025." },
    { title: "Crow", description: "Someone mistook this for a chicken, unbelievable. Taken May 22, 2025." },
    { title: "Munchin'", description: "Eating good. Taken May 25, 2025."}
];

const totalImages = imageMeta.length;

for (let i = totalImages; i >= 0; i--) {
    if (imageMeta[i-1].title == "NOT INCLUDED") continue;

    const imgWrapper = document.createElement('article');
    imgWrapper.classList.add('thumb');

    // wrapper link for image
    const imgLink = document.createElement('a');
    imgLink.classList.add('image');
    imgLink.href = `images/IMG_${i}.JPG`;

    const img = document.createElement('img');
    img.src = `images/IMG_${i}.JPG`;
    img.loading = "lazy";

    imgLink.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = imageMeta[i - 1]?.title || `Untitled ${i}`;

    const desc = document.createElement('p');
    desc.textContent = imageMeta[i - 1]?.description || "";

    imgWrapper.appendChild(imgLink);
    imgWrapper.appendChild(title);
    imgWrapper.appendChild(desc);

    gallery.appendChild(imgWrapper);
}
