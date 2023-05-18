import addRemove from '../pageobjects/addremove.page.js'

describe('Adding and Deleting buttons', () => {
    xit('should click the Add Element buttton 5 times', async () => {
        await addRemove.open()

        await browser.pause (3000) 
        

        for(let i=0; i<5; i++){
            await (addRemove).bttn.click()

        }
        await browser.pause (3000) 

        



    })

    xit('should haved five "Delete" elements', async () => {
        await addRemove.open()

        await browser.pause (3000) 
        
        for(let i=0; i<5; i++){
            await (addRemove).bttn.click()
            await browser.pause (1000) 

        }

        for(let i=0; i<5; i++){
            await (addRemove).dlte.click()
            await browser.pause (1000) 

        }



    })

    it('should delete two "Delete" elements', async () => {
        await addRemove.open()

        await browser.pause (3000) 
        

        for(let i=0; i<5; i++){
            await (addRemove).bttn.click()
            await browser.pause (1000) 

        }

        for(let i=0; i<2; i++){
            await (addRemove).dlte.click()
            await browser.pause (1000) 

        }
        await browser.pause (3000) 
        console.log (addRemove.size)
        await expect(addRemove.size).toBeElementsArrayOfSize(3)


    })

    xit('should have only three "Delete" elements remaining', async () => {
        await addRemove.open()

        await browser.pause (3000) 
        

        let buttnNumber = (addRemove); 


    })
})


