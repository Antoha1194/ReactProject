import React, { useState } from 'react';
import PushOff from '../image/push_false.png';
export default function PushToogle(){
    return <div className="push">
            <img className="push__image" width="34px" src={PushOff} alt="Push Notification"/>
        </div>

}