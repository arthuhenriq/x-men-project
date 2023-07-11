
const characters = document.querySelectorAll('.character');


characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removeSelectedCharacter();

        character.classList.add('selected');

        changeCharacterSelectedImage(character);

        changeCharacterSelectedName(character);

        changeCharacterSelectedDescription(character);
    })
})

function changeCharacterSelectedDescription(character) {
    const character_description = document.getElementById('character-description');
    character_description.innerText = character.getAttribute('data-description');
}

function changeCharacterSelectedName(character) {
    const character_name = document.getElementById('character-name');
    character_name.innerText = character.getAttribute('data-name');
}

function changeCharacterSelectedImage(character) {
    const character_image = document.querySelector('.big-character-selected');
  
    const character_id = character.attributes.id.value;
    character_image.src = `./src/images/card-${character_id}.png`;
}

function removeSelectedCharacter() {
    const character_selected = document.querySelector('.selected');
    character_selected.classList.remove('selected');
}
