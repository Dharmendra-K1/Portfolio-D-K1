/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
        sections.forEach(sec=>{
            let top= window.scrollY;
            let offset= sec.offsetTop -150;
            let height= sec.offsetHeight;
            let id=sec.getAttribute('id');

            if (top>=offset&& top<offset+height){
                navLinks.forEach(links=>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+id+ ']').classList.add('active');
                });
            };
        });

    /*==================== sticky navbar ====================*/
        let header= document.querySelector('header');

        header.classList.toggle('sticky',window.scrollY>100);





    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content,.heading', { origin:'top'});
 ScrollReveal().reveal('.home-img,.skills-container,.projects-box,.contact form', { origin:'bottom'});
 ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left'});
 ScrollReveal().reveal('.home-content p,.about-content', { origin:'right'});
/*==================== typed js ====================*/

const typed= new Typed('.multiple-text',{
    strings: ['','Chemical Engineer','Programmer','FullStack Developer','Data Scientist'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});
// about me read more button functionality
const chapters = document.querySelectorAll('.por-text');
  let currentChapterIndex = 0;

  function toggleChapterVisibility() {
    const currentChapterContent = chapters[currentChapterIndex].querySelector('p');
    const readMoreBtn = document.querySelector('.read-more-btn');

    // Toggle the visibility of the current chapter content
    if (currentChapterContent.style.display === 'none') {
      currentChapterContent.style.display = 'block';
      readMoreBtn.textContent = 'Read Less';
    } else {
      currentChapterContent.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
    }

    // Hide the previous chapter content
    const previousChapterIndex = (currentChapterIndex - 1 + chapters.length) % chapters.length;
    chapters[previousChapterIndex].querySelector('p').style.display = 'none';

    // Move to the next chapter
    currentChapterIndex = (currentChapterIndex + 1) % chapters.length;
  }

  // Set initial visibility to "none" for all chapter contents except the first one
  for (let i = 0; i < chapters.length; i++) {
    chapters[i].querySelector('p').style.display = 'none';
  } 



// read more button
let noOfCharac = 150;
let contents = document.querySelectorAll(".skillcontent");
contents.forEach(skillcontent => {
    //If text length is less that noOfCharac... then hide the read more button
    if(skillcontent.textContent.length < noOfCharac){
        skillcontent.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = skillcontent.textContent.slice(0,noOfCharac);
        let moreText = skillcontent.textContent.slice(noOfCharac);
        skillcontent.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});


function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read more" ? btn.textContent = "Read less" : btn.textContent = "Read more";
};
// alert("page is still under construction.");