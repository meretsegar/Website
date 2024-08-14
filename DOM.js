function clickit() {
    const button1 = document.querySelector('button');
    const existingParagraph = document.querySelector('p');
    if (existingParagraph) {
            existingParagraph.remove();
            button1.innerText = 'Click me';
            button1.classList.remove('added_class')
        } else {
            const newParagraph = document.createElement('p');
            newParagraph.innerText = 'You\'ve clicked the button';
            document.body.append(newParagraph);
            button1.innerText = 'Clicked';
            button1.classList.add('added_class')
        }
    }