function infoSprites()
{
    sunInfo=createSprite(-13480,displayHeight / 2-270,10,10)
    sunInfo.addImage(sunInfoImg)
    sunInfo.scale=1.3
    sunInfo.visible=false

  meInfo=createSprite(-10700,displayHeight / 2-230,10,10)
  meInfo.addImage(meInfoImg)
  meInfo.scale=0.6
  meInfo.visible=false
  
  veInfo=createSprite(-7640,displayHeight / 2-280,10,10)
  veInfo.addImage(veInfoImg)
  veInfo.scale=0.6
  veInfo.visible=false

  eaInfo=createSprite(-4640,displayHeight / 2-290,10,10)
  eaInfo.addImage(eaInfoImg)
  eaInfo.scale=0.6  
  eaInfo.visible=false
  
  maInfo=createSprite(-1670,displayHeight / 2-250,10,10)
  maInfo.addImage(maInfoImg)
  maInfo.scale=0.6 
  maInfo.visible=false
  
  juInfo=createSprite(1420,displayHeight / 2-310,10,10)
  juInfo.addImage(juInfoImg)
  juInfo.scale=0.6
  juInfo.visible=false

  saInfo=createSprite(4500,displayHeight / 2-310,10,10)
  saInfo.addImage(saInfoImg)
  saInfo.scale=0.6
  saInfo.visible=false

  urInfo=createSprite(7350,displayHeight / 2-290,10,10)
  urInfo.addImage(urInfoImg)
  urInfo.scale=0.6
  urInfo.visible=false

  neInfo=createSprite(10360,displayHeight / 2-290,10,10)
  neInfo.addImage(neInfoImg)
  neInfo.scale=0.6
  neInfo.visible=false
}

function Information()
{ 
  if(gameState===2)
  {
        
        if(spaceCraft.x>-14500&&spaceCraft.x<-13500){
            sunInfo.visible=true
        }
        else{
            sunInfo.visible=false
        }
        if(spaceCraft.x>-11500&&spaceCraft.x<-10500){
        meInfo.visible=true
        merNt.visible=true
        }
        else{
        meInfo.visible=false
        merNt.visible=false
        }

        if(spaceCraft.x>-8500&&spaceCraft.x<-7500){
        veInfo.visible=true
        venNt.visible=true
        }
        else{
        veInfo.visible=false
        venNt.visible=false
        }
        
        if(spaceCraft.x>-5500&&spaceCraft.x<-4500){
        eaInfo.visible=true
        earNt.visible=true
        }
        else{
        eaInfo.visible=false
        earNt.visible=false
        }

        if(spaceCraft.x>-2500&&spaceCraft.x<-1500){
        maInfo.visible=true
        marNt.visible=true
        }
        else{
        maInfo.visible=false
        marNt.visible=false
        }
        
        if(spaceCraft.x>500&&spaceCraft.x<1500){
        juInfo.visible=true
        jupNt.visible=true
        }
        else{
        juInfo.visible=false
        jupNt.visible=false
        }
        
        if(spaceCraft.x>3500&&spaceCraft.x<4500){
        saInfo.visible=true
        satNt.visible=true
        }
        else{
        saInfo.visible=false
        satNt.visible=false
        }
        
        if(spaceCraft.x>6500&&spaceCraft.x<7500){
        urInfo.visible=true
        uraNt.visible=true
        }
        else{
        urInfo.visible=false
        uraNt.visible=false
        }
        
        if(spaceCraft.x>9500&&spaceCraft.x<10500){
        neInfo.visible=true
        nepNt.visible=true
        }
        else{
        neInfo.visible=false
        nepNt.visible=false
        }
  }
}

