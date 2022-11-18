
"use strict";
var unichar = "";
var keycode;
function ConvertToUnicode(){
    for(var i = 0; i <= document.getElementById("txtInput").value.length-1; i++){
      keycode = document.getElementById("txtInput").value.charCodeAt(i);
      switch(keycode){
        case 117 : keycode = 4096; break;
        case 99 : keycode = 4097; break;
        case 42 : keycode = 4098; break;
        case 67 : keycode = 4099; break;
        case 105 : keycode = 4100; break;
        case 112 : keycode = 4101; break;
        case 113 : keycode = 4102; break;
        case 90 : keycode = 4103; break;
        case 245 : keycode = 4104; break;
        case 218 : keycode = 4105; break;
        case 110 : keycode = 4106; break;
        case 35 : keycode = 4107; break;
        case 88 : keycode = 4108; break;
        case 33 : keycode = 4109; break;
        case 161 : keycode = 4110; break;
        case 80 : keycode = 4111; break;
        case 119 : keycode = 4112; break;
        case 120 : keycode = 4113; break;
        case 39 : keycode = 4114; break;
        case 34 : keycode = 4115; break;
        case 101 : keycode = 4116; break;
        case 121 : keycode = 4117; break;
        case 122 : keycode = 4118; break;
        case 65 : keycode = 4119; break;
        case 98 : keycode = 4120; break;
        case 114 : keycode = 4121; break;
        case 44 : keycode = 4122; break;
        case 38 : keycode = 4123; break;
        case 118 : keycode = 4124; break;
        case 234 : keycode = 4125; break;
        case 111 : keycode = 4126; break;
        case 91 : keycode = 4127; break;
        case 86 : keycode = 4128; break;
        case 116 : keycode = 4129; break;
        case 163 : keycode = 4131; break;
        case 254 : keycode = 4132; break;
        case 79 : keycode = 4133; break;
        case 232 : keycode = 4134; break;
        case 235 : keycode = 4137; break;
        case 236 : keycode = 4138; break;
        case 103 : keycode = 4139; break;
        case 109 : keycode = 4140; break;
        case 100 : keycode = 4141; break;
        case 68 : keycode = 4142; break;
        case 107 : keycode = 4143; break;
        case 108 : keycode = 4144; break;
        case 97 : keycode = 4145; break;
        case 74 : keycode = 4146; break;
        case 75 : keycode = 4147; break;
        case 76 : keycode = 4148; break;
        case 72 : keycode = 4150; break;
        case 104 : keycode = 4151; break;
        case 59 : keycode = 4152; break;
        case 102 : keycode = 4153; break;
        case 115 : keycode = 4154; break;
        case 106 : keycode = 4155; break;
        case 71 : keycode = 4156; break;
        case 83 : keycode = 4157; break;
        case 48 : keycode = 4160; break;
        case 49 : keycode = 4161; break;
        case 50 : keycode = 4162; break;
        case 51 : keycode = 4163; break;
        case 52 : keycode = 4164; break;
        case 53 : keycode = 4165; break;
        case 54 : keycode = 4166; break;
        case 55 : keycode = 4167; break;
        case 56 : keycode = 4168; break;
        case 57 : keycode = 4169; break;
        case 63 : keycode = 4170; break;
        case 47 : keycode = 4171; break;
        case 252 : keycode = 4172; break;
        case 237 : keycode = 4173; break;
        case 164 : keycode = 4174; break;
        case 92 : keycode = 4175; break;
        case 58 : keycode = 4186; break;
        case 250 : keycode = 4192; break;
        case 169 : keycode = 4193; break;
        case 190 : keycode = 4194; break;
        case 162 : keycode = 4195; break;
        case 70 : keycode = 4196; break;
        case 246 : keycode = 4197; break;
        case 228 : keycode = 4198; break;
        case 249 : keycode = 4199; break;
        case 198 : keycode = 4200; break;
        case 209 : keycode = 4201; break;
        case 251 : keycode = 4202; break;
        case 241 : keycode = 4203; break;
        case 179 : keycode = 4204; break;
        case 178 : keycode = 4205; break;
        case 215 : keycode = 4206; break;
        case 185 : keycode = 4207; break;
        case 214 : keycode = 4208; break;
        case 229 : keycode = 4209; break;
        case 197 : keycode = 4210; break;
        case 172 : keycode = 4211; break;
        case 166 : keycode = 4212; break;
        case 180 : keycode = 4213; break;
        case 168 : keycode = 4214; break;
        case 233 : keycode = 4215; break;
        case 220 : keycode = 4216; break;
        case 230 : keycode = 4217; break;
        case 193 : keycode = 4218; break;
        case 199 : keycode = 4219; break;
        case 174 : keycode = 4220; break;
        case 223 : keycode = 4221; break;
        case 77 : keycode = 4222; break;
        case 78 : keycode = 4223; break;
        case 66 : keycode = 4224; break;
        case 96 : keycode = 4225; break;
        case 126 : keycode = 4226; break;
        case 238 : keycode = 4227; break;
        case 239 : keycode = 4228; break;
        case 244 : keycode = 4229; break;
        case 243 : keycode = 4230; break;
        case 167 : keycode = 4231; break;
        case 73 : keycode = 4232; break;
        case 170 : keycode = 4233; break;
        case 84 : keycode = 4234; break;
        case 216 : keycode = 4235; break;
        case 208 : keycode = 4236; break;
        case 248 : keycode = 4237; break;
        case 240 : keycode = 4238; break;
        case 69 : keycode = 4239; break;
        case 189 : keycode = 4240; break;
        case 64 : keycode = 4241; break;
        case 124 : keycode = 4242; break;
        case 123 : keycode = 4135; break; //Fix 4243 to 4135, ZawGyi use Myanmar Letter E as 4135.
        case 89 : keycode = 4244; break;
        case 85 : keycode = 4245; break;
        case 201 : keycode = 4246; break;
        case 165 : keycode = 4247; break;
        case 81 : keycode = 4154; unichar += String.fromCharCode(4157); break;
        case 82 : keycode = 4221; unichar += String.fromCharCode(4156); break;
        case 87 : keycode = 4221; unichar += String.fromCharCode(4234); break;		
    }
      unichar += String.fromCharCode(keycode);
}

    document.getElementById("txtResult").value = unichar; 
    unichar = ""; 
    // convert ခလုတ်နိပ်ပီးတာနဲ့ unichar တန်ဖိုးကို empty ပြောင်းခြင်းဖြစ်တယ်။
    // ဒီလိုပြောင်းခြင်းဖြင့်။ 
    //၁။ convert ခလုပ်ဆက်ပီးနိပ်သော်လည်း zawgy textarea မှာ ပထမ တစ်ချက်နိပ်တုန်းကသာ
    //ပြောင်းလဲပေးတဲ့ စာတွေပဲရှိမယ်။ empty မှာမပြောင်းဘူးဆို ခလုပ်နိပ်တိုင်း ပြောင်းပီးသား စာကို
    //ထပ်ခါခါပြောင်းပီးတော့ ရှိနေမှာဖြစ်တယ်။ clear လုပ်ဖို့ browser ကို refresh မှာသာရမည်။
    //တစ်ခါပြောင်းပီးတိုင်း တစ်ခါ refresh လုပ်ရမလိုဖြစ်နေပီ ။ ထို့ကြောင့်လွယ်ကူတဲ့နည်းအနေနဲ့
    // တစ်ခါ assign လုပ်ပြောင်းပြောင်းပီးတာနဲ့ unichar empty ပြောင်းထားခြင်းဖြစ်တယ်။
}

