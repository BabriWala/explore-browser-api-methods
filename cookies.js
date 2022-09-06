const getCookieByName = name =>{
    const cookieString = documnet.cookie;
    const cookieParts = cookieString.split('; ');
    const cookie = cookieParts.find(c => c.includes(name));
    if(cookie){
        // country=us
        const cookieValue = cookie.Split('=')[1]
        return cookieValue;
    }
}