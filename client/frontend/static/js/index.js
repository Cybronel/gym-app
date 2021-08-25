import Homepage from "./views/Homepage.js"
import LogIn from "./views/LogIn.js"
import Register from "./views/Register.js"

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path: '/', view: Homepage },
        { path: '/login', view: LogIn},
        { path: '/register', view: Register},
    ]

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
            // This can be changed to a 404 page
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector('body').innerHTML = await view.getHtml()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })


    router()
})