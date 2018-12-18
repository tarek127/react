import React from 'react'

const Form =() => {
  return (
    <div>
        <div class="book">
        <div class="container">
            <div class="col">                                
        <div class="row">
            <div class="col-md-6">
            <div class="title">
            <h1>Get in touch</h1>
            <p>Whatever your event or celebration, we are here to make your special day a truly memorable one.</p>
            <p class="ify">If you have questions or comments, please get a hold of us in whichever way is most convenient. Ask away. There is no reasonable question that our team can not answer</p>
            <h2>Follow us</h2>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
            </div>
            <div class="col-md-6">
                <div class="on">
                <form>
                <input  type="text" name="user name" placeholder="Name"/>
                <input type="Email" name="Email" placeholder="Email"/>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea placeholder="Yor Message"/>              
                <input class="sub" type="submit" value="Send"/>
                </form>
            </div>
            </div>
            </div>
            </div>           
        </div>  
        </div> 
    </div>
  )
}
export default Form;
