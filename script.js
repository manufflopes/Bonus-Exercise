const photos = [
    'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const img = document.querySelector('img')
let position = 0

img.src = photos[position]

const previousButton = document.querySelector('.previousButton')

previousButton.addEventListener('click', previousImage)

const nextButton = document.querySelector('.nextButton')

nextButton.addEventListener('click', nextImage)

function nextImage() {
    if (position == photos.length - 1) {
        position = 0
    } else {
        position++
    }
    img.src = photos[position]
}

function previousImage() {
    if (position == 0) {
        position = photos.length - 1
    } else {
        position--
    }
    img.src = photos[position]
}
