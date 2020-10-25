const homePage = (target) => {
  const div = document.createElement('div');
  div.classList = 'homepage';
  div.id = 'rm'

  const backGImage = document.createElement('img');
  backGImage.src = './resources/homebg.jpg';
  backGImage.classList = 'background';

  const heading = document.createElement('h1');
  heading.textContent = 'Best desserts in town';
  heading.classList = 'hp-h';

  const description = document.createElement('p');
  description.textContent = 'We are a dedicated to make you feel sweeter';
  description.classList = 'hp-p';

  div.appendChild(backGImage);
  div.appendChild(heading); 
  div.appendChild(description);
  target.appendChild(div);
};

export default homePage;