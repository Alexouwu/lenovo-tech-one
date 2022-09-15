import React from 'react';

import { BackgroundContainer2, Form, InputWrapper,Label, Input, Button, H1,P,A, TextWrapper, SP, CheckboxDiv, ButtonDiv} from './welcome.Elements';


 const WelcomeMessage = ( ) => {

   return (
   <BackgroundContainer2 className ='form-content-right'>

       <TextWrapper>
       <H1> ¡Bienvenido a Tech One! </H1>
       <P> Soluciones End to End para los negocios del futuro.</P>
     </TextWrapper>

   </BackgroundContainer2>
   );
 };
 
 export default WelcomeMessage;