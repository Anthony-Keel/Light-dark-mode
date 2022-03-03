const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch themes Dynamically
function swithTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else {
        document.documentElement.setAttribute('data-theme','light');
    }
}
// event listener
toggleSwitch.addEventListener('change', swithTheme);
