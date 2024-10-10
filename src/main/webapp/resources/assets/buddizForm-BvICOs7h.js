import{_ as P,c as l,d as c,e,f as i,v as _,t as r,n as E,F as h,p as v,w as B,l as N,o as d,H as M,A as $,B as j,g as u}from"./index-C5pcsIY_.js";const o=m=>($("data-v-eb9af598"),m=m(),j(),m),A={class:"fluid-container"},O=o(()=>e("div",{class:"type-header"},[e("h2",null,"버디즈 이력 등록"),e("div",{style:{"font-size":"17pt","margin-top":"8pt"}},"버디즈로 활동하기 위한 나만의 소개를 입력해주세요!")],-1)),q={class:"fluid-container px-5 pt-5 pb-5",style:{"background-color":"#fbfbfc"}},H={class:"section-card"},K=o(()=>e("h2",{class:"section-title"},[e("i",{class:"section-icon"}),u(" Basic Info")],-1)),G={class:"input-group"},J=o(()=>e("label",{for:"nickname"},"닉네임",-1)),Q={class:"character-limit"},W={class:"input-group"},X=o(()=>e("label",{for:"residence"},"거주 지역",-1)),Y=o(()=>e("option",{value:"",disabled:""},"지역 선택",-1)),Z=["value"],ee={class:"input-group"},te=o(()=>e("label",{for:"koreaExperience"},"한국 자취 경력 (년)",-1)),se={class:"section-card"},oe=o(()=>e("h2",{class:"section-title"},[e("i",{class:"section-icon"}),u(" Description")],-1)),ne={class:"character-limit"},ae={class:"section-card"},le=o(()=>e("h2",{class:"section-title"},[e("i",{class:"section-icon"}),u(" 추가 정보")],-1)),ie={class:"input-group"},ce=o(()=>e("label",{for:"accompanyRegion"},"동행 가능 지역",-1)),de=o(()=>e("option",{value:"",disabled:""},"지역 선택",-1)),re=["value"],ue={class:"input-group"},pe=o(()=>e("label",{for:"transactionCount"},"거래 횟수",-1)),_e={class:"section-card"},he={class:"checkbox-group"},ve=o(()=>e("h4",null,"성격",-1)),me={class:"left-align"},fe=["id","value"],ge=["for"],be={class:"checkbox-group"},ke=o(()=>e("h4",null,"소통 가능한 언어",-1)),ye={class:"left-align"},xe=["id","value"],Ue=["for"],Ve={class:"section-card"},Ce=o(()=>e("h2",{class:"section-title"},[e("i",{class:"section-icon"}),u(" Price")],-1)),De=o(()=>e("label",{for:"price"},[u("Price (per night) "),e("span",{class:"required-asterisk"},"*")],-1)),Fe={class:"price-group-inline"},Ee=o(()=>e("option",{value:"$"},"$",-1)),Se=o(()=>e("option",{value:"€"},"w",-1)),we=o(()=>e("option",{value:"₫"},"₫",-1)),Be=[Ee,Se,we],Me={class:"section-card"},ze=o(()=>e("h2",{class:"section-title"},[e("i",{class:"section-icon"}),u(" Photos")],-1)),Re=o(()=>e("div",{class:"info-box"},[e("p",null,"The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first. The maximum video size is 10 MB. Formats: mp4, mov.")],-1)),Te={class:"upload-btn"},Ie=o(()=>e("span",null,"Upload photos",-1)),Le=o(()=>e("p",null,"or drag them in",-1)),Pe={key:0},Ne=["src"],$e={__name:"buddizForm",setup(m){const f=l(""),k=l(""),y=l(""),x=l(""),U=l(""),g=l(""),V=l(0),C=l("$"),b=l([]),D=l([]),F=l([]),z=["Friendly","Emotional","Calm","Energetic","Silent","Organized","Sociable"],R=["English","Vietnamese","Korean","Chinese"],S=["서울","부산","대구","인천","광주"],w=a=>{const s=a.target.files||a.dataTransfer.files;for(let t=0;t<s.length;t++){const n=new FileReader;n.onload=p=>{b.value.push(p.target.result)},n.readAsDataURL(s[t])}},T=a=>{a.preventDefault(),a.dataTransfer.dropEffect="copy"},I=a=>{a.preventDefault(),w(a)},L=()=>{const a={nickname:f.value,residence:k.value,koreaExperience:y.value,accompanyRegion:x.value,transactionCount:U.value,selectedCharacteristics:D.value,selectedLanguages:F.value,description:g.value,price:V.value,currencyUnit:C.value,photos:b.value};console.log(a),alert("Form submitted!")};return(a,s)=>(d(),c("div",A,[O,e("div",q,[e("section",H,[K,e("div",G,[J,i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>f.value=t),type:"text",id:"nickname",placeholder:"닉네임을 입력해주세요",maxlength:"48"},null,512),[[_,f.value]]),e("span",Q,r(48-f.value.length)+" characters left",1)]),e("div",W,[X,i(e("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>k.value=t),id:"residence"},[Y,(d(),c(h,null,v(S,t=>e("option",{key:t,value:t},r(t),9,Z)),64))],512),[[E,k.value]])]),e("div",ee,[te,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>y.value=t),type:"number",id:"koreaExperience",placeholder:"숫자로 입력해주세요."},null,512),[[_,y.value]])])]),e("section",se,[oe,i(e("textarea",{"onUpdate:modelValue":s[3]||(s[3]=t=>g.value=t),placeholder:"Describe your accommodation",maxlength:"8000"},null,512),[[_,g.value]]),e("span",ne,r(8e3-g.value.length)+" characters left",1)]),e("section",ae,[le,e("div",ie,[ce,i(e("select",{"onUpdate:modelValue":s[4]||(s[4]=t=>x.value=t),id:"accompanyRegion"},[de,(d(),c(h,null,v(S,t=>e("option",{key:t,value:t},r(t),9,re)),64))],512),[[E,x.value]])]),e("div",ue,[pe,i(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>U.value=t),type:"number",id:"transactionCount",placeholder:"거래 횟수를 입력해주세요."},null,512),[[_,U.value]])])]),e("section",_e,[e("div",he,[ve,e("div",me,[(d(),c(h,null,v(z,(t,n)=>e("div",{key:n,class:"checkbox-item"},[i(e("input",{type:"checkbox",id:"char-"+n,value:t,"onUpdate:modelValue":s[6]||(s[6]=p=>D.value=p)},null,8,fe),[[M,D.value]]),e("label",{for:"char-"+n},r(t),9,ge)])),64))])]),e("div",be,[ke,e("div",ye,[(d(),c(h,null,v(R,(t,n)=>e("div",{key:n,class:"checkbox-item"},[i(e("input",{type:"checkbox",id:"lang-"+n,value:t,"onUpdate:modelValue":s[7]||(s[7]=p=>F.value=p)},null,8,xe),[[M,F.value]]),e("label",{for:"lang-"+n},r(t),9,Ue)])),64))])])]),e("section",Ve,[Ce,De,e("div",Fe,[i(e("input",{"onUpdate:modelValue":s[8]||(s[8]=t=>V.value=t),type:"number",placeholder:"Min",min:"0",id:"price"},null,512),[[_,V.value]]),i(e("select",{"onUpdate:modelValue":s[9]||(s[9]=t=>C.value=t)},Be,512),[[E,C.value]])])]),e("section",Me,[ze,Re,e("div",{class:"drag-and-drop-box",onDragover:B(T,["prevent"]),onDrop:B(I,["prevent"])},[e("label",Te,[e("input",{type:"file",onChange:w,multiple:"","aria-label":"Upload photos"},null,32),Ie]),Le],32),b.value.length?(d(),c("div",Pe,[(d(!0),c(h,null,v(b.value,(t,n)=>(d(),c("div",{key:n,class:"photo-preview"},[e("img",{src:t},null,8,Ne)]))),128))])):N("",!0)]),e("button",{class:"submit-btn",onClick:L},"Save and continue")])]))}},Ae=P($e,[["__scopeId","data-v-eb9af598"]]);export{Ae as default};