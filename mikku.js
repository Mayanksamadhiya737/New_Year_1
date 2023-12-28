var i = 0;
var txt1 =
  "Hi Akku (Jaan)❤️.....!  <<               Now 🤗 I want to say something special to you. <<<                So , Please read everything carefully 💌...!                                                                           > When I saw👀 you for the first time < You seems something Special💝 to me.  <<                  As the days goes < you get closer to me 🥺🥺👉👈....! <<                           I don't know the reason why your thoughts always resonates inside my mind           << Why Do I care and think about you even more than myself...!                                                     > Everything about you is always interesting for me...!                     << I am somewhat nervous 😢 Because I haven't said these words to anyone else and I won't say to anyone in future...!                                                     > I Love❤️ my Parents so much than anything else in this world....!                    << Butttttttt Now You are the only person  whom I love❤️ equally with my parents....!                                                             >I Love🤗 U <Akku.....!   <<Give me One chance🤕 to Prove my Love by Marry me 💍 ...! <<Happiest😍 New Year to My Heartbeat💓   <<<by Mikku 💕";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}