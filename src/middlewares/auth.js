export default function auth({next, router}){
    if(!localStorage.getItem('access_token')){
        return router.push({name: 'sign.in'});
    }
    return next();
}