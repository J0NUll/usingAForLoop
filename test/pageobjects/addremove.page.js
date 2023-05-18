

import Page from './page.js';


class addRemove extends Page {
    
    get bttn () {
    return $('#content > div > button'); 

    }

    get dlte () {
        
        return $('//*[@id="elements"]/button[1]');

    }


    get size () {

        return $$('#elements')
    }



    open () {
        return super.open('add_remove_elements/');
    }
}

export default new addRemove();
