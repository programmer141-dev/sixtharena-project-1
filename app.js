const loading = () => {
    setTimeout(() => {
        document.getElementsByClassName("loading")[0].style.display = "none";
        console.log('complete')
    }, 2000);
}