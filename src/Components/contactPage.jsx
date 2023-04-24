import React from 'react';
import plusSymbol from './plusIcon-PhotoRoom.png';
import garbageCan from './garbageCan-PhotoRoom.png';
import share from './shareIconPhotoRoom.png';
import info from './infoIcon-PhotoRoom.png';
import "./contactPage.css"



function ContactPage(){
    let initialContacts = [{"name": "Brandon", "email" : "brandon.loveland@maine.edu", "id": 0}]
    let [contacts, setContacts] = React.useState(initialContacts);

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    function getNameInitials(name){
        return name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'');
    }

    function addContact(username, email){
        
        const check=0;
        var users = 
        [{"username":"Brandon","email":"brandon.loveland@maine.edu"},
        {"username":"Maha","email":"maha.fazli@maine.edu"},
        {"username":"Caleb","email":"caleb.cholod@maine.edu"},
        {"username":"David","email":"tyler.kaufman@maine.edu"},
        {"username":"Seamus","email":"seamus.walden@maine.edu"},
        {"username":"Ondrea","email":"omccumesky0@blogs.com"},
        {"username":"Adolf","email":"aromera1@free.fr"},
        {"username":"Natka","email":"ngarnul2@theguardian.com"},
        {"username":"Dedra","email":"dheckner3@washingtonpost.com"},
        {"username":"Krystalle","email":"kmcmonies4@about.com"},
        {"username":"Reina","email":"rbraben5@icq.com"},
        {"username":"Nevins","email":"nclayson6@jigsy.com"},
        {"username":"Daria","email":"dduffie7@joomla.org"},
        {"username":"Reinaldos","email":"rsagg8@nifty.com"},
        {"username":"Aaren","email":"ashingfield9@1688.com"},
        {"username":"Sarette","email":"siliffea@bigcartel.com"},
        {"username":"Giacinta","email":"gorrob@spotify.com"},
        {"username":"Crin","email":"cbroggioc@mapquest.com"},
        {"username":"Wrennie","email":"wolennachaind@nationalgeographic.com"},
        {"username":"Ody","email":"ohannaye@naver.com"},
        {"username":"Eran","email":"eviccaryf@privacy.gov.au"},
        {"username":"Cornelle","email":"cgreshamg@marketwatch.com"},
        {"username":"Gherardo","email":"ghazleh@issuu.com"},
        {"username":"Sigismund","email":"smolesworthi@msn.com"},
        {"username":"Netta","email":"ngrimoldbyj@mapquest.com"},
        {"username":"Tricia","email":"togarak@google.com"},
        {"username":"Derk","email":"dmacpheel@tamu.edu"},
        {"username":"Elly","email":"etolemanm@ucoz.com"},
        {"username":"Phylys","email":"pmcvicarn@pagesperso-orange.fr"},
        {"username":"Uta","email":"ubannello@i2i.jp"},
        {"username":"Imelda","email":"iitzkovwichp@istockphoto.com"},
        {"username":"Audra","email":"acourtinq@businesswire.com"},
        {"username":"Aldin","email":"aeasthamr@earthlink.net"},
        {"username":"Dyna","email":"dkildales@chicagotribune.com"},
        {"username":"Titos","email":"tolivert@wiley.com"}]
    
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username || email === users[i].email){
                alert(username + ' has been added')
                console.log(users[i].email)
                console.log(users[i].username)
                let id = Math.max(...contacts.map(o => o.id)) + 1;
                contacts.push({"name": users[i].username, "email": users[i].email, "id": id});
                setSearchTerm('');
                check=1;
                return;
            }
            
        }
        if (check===0){
            alert('User not found...')
        }
    }
    
    function contactInfo(username, email){
        alert('Contact Info:\nName: ' + username +'\n' + 'Email: ' + email)
    }

    function handleRemove(id, name) {
        console.log(id);
        //remove item
        const newList = contacts.filter((contact) => contact.id !== id);
        
        //Set new list
        setContacts(newList);

        //Alert contact removal
        alert(name + ' has been removed.')
    }

    function handleShare(id, name, email) {
        console.log(name +" " + id)

        //prompt user
        alert('prompt user for share of task(s)')
    }

    return (
        <div id="ContactTab">
            <div id="ContactContainer">

                <div id="ContactsTabTopContent">
                    <h1 id="ContactsTitle">Contacts</h1>
                    
                    <div id="ContactsTabTopContentLeftSide">
                        
                        <div id = "searchContacts">
                            <input id = "searchContactsInput"
                            type="text"
                            placeholder="Search email or name..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            />
                        </div>
                        <button className="addContact" onClick={() => addContact(searchTerm, searchTerm)}>
                            <img src={plusSymbol} id="plusSymbol" alt="Add contact"></img> 
                        </button>
                        
                    </div>
                    
                </div>

                <div id="ContactsTabBottomContent">
                    
                    <ul id="contactList">
                        {contacts.map((contact) => (
                            <li key={contact.id} className="contact">
                                <div className="userIcon">{getNameInitials(contact["name"])}</div> 
                                
                                <div className="names">{contact["name"]} </div>
                                
                                <div className="icons">
                                    <img src={info} id="infoIcon" alt="Contact Information Button" onClick={() => contactInfo(contact["name"], contact["email"])}></img>
                                
                                    <img src={share} id="shareIcon" alt="Share Button" onClick={() => handleShare(contact.id, contact.name, contact.email)}></img>
                                
                                    <img src={garbageCan} id="garbageCan" alt="remove contact" onClick={() => handleRemove(contact.id, contact.name)}></img>
                                </div>
                            </li>  
                        ))}
                    </ul>
                </div>

            </div>
        </div>
        
    )
}


export default ContactPage;