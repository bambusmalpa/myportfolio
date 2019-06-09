import React from 'react';

const Contact = () => {
    return (<>
            <form action="https://formspree.io/bambusmalpa@gmail.com" method="POST">
                <input type="text" name="name"></input>
                <input type="email" name="_replyto"></input>
                <input type="submit" value="Send"></input>
            </form>
            </>
  );
}
 
export default Contact;