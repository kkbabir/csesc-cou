
     
	          
			  function get(){
			      var inp=document.getElementsByTagName("input");
			     for(var i=0;i<=7;i++){
				     if(inp[i].value==""){
					     alert("Please Fill Up The All 1ST Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
				
		var a=document.getElementById("a").innerHTML;
		var a1=document.getElementById("a1").value;
		var b=document.getElementById("b").innerHTML;
		var b1=document.getElementById("b1").value;
		var c=document.getElementById("c").innerHTML;
		var c1=document.getElementById("c1").value;
		var d=document.getElementById("d").innerHTML;
		var d1=document.getElementById("d1").value;
		var e=document.getElementById("e").innerHTML;
		var e1=document.getElementById("e1").value;
		var f=document.getElementById("f").innerHTML;
		var f1=document.getElementById("f1").value;
		var g=document.getElementById("g").innerHTML;
		var g1=document.getElementById("g1").value;
		var h=document.getElementById("h").innerHTML;
		var h1=document.getElementById("h1").value;
		    
		var result=((a*gra[a1])+(b*gra[b1])+(c*gra[c1])+(d*gra[d1])+(e*gra[e1])+(f*gra[f1])+(g*gra[g1])+(h*gra[h1]))/19.5;
		
			      document.getElementById("show").innerHTML=result.toFixed(2);
				var fi=  ((a*gra[a1])+(b*gra[b1])+(c*gra[c1])+(d*gra[d1])+(e*gra[e1])+(f*gra[f1])+(g*gra[g1])+(h*gra[h1]))
				document.getElementById("showf").innerHTML=fi.toFixed(2);
			}
			
			var gra	= {
    "A+": 4.00,
    "A": 3.75,
    "A-": 3.50,
    "B+": 3.25,
    "B": 3.00,
    "B-": 2.75,
    "C+": 2.50,
    "C": 2.25,
    "D": 2.00,
    "F": 0
};	 

	   function get2(){
			       var inp1=document.getElementsByTagName("input");
			     for(var i=8;i<=16;i++){
				     if(inp1[i].value==""){
					     alert("Please Fill Up The 2ND Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
		var a12=document.getElementById("a12").innerHTML;
		var a2=document.getElementById("a2").value;
		var b12=document.getElementById("b12").innerHTML;
		var b2=document.getElementById("b2").value;
		var c12=document.getElementById("c12").innerHTML;
		var c2=document.getElementById("c2").value;
		var d12=document.getElementById("d12").innerHTML;
		var d2=document.getElementById("d2").value;
		var e12=document.getElementById("e12").innerHTML;
		var e2=document.getElementById("e2").value;
		var f12=document.getElementById("f12").innerHTML;
		var f2=document.getElementById("f2").value;
		var g12=document.getElementById("g12").innerHTML;
		var g2=document.getElementById("g2").value;
		var h12=document.getElementById("h12").innerHTML;
		var h2=document.getElementById("h2").value;
		var i12=document.getElementById("i12").innerHTML;
		var i2=document.getElementById("i2").value;
		
		var result2=((a12*gra[a2])+(b12*gra[b2])+(c12*gra[c2])+(d12*gra[d2])+(e12*gra[e2])+(f12*gra[f2])+(g12*gra[g2])+(h12*gra[h2])+(i12*gra[i2]))/18.5;
			      document.getElementById("show2").innerHTML = result2.toFixed(2);
				  
				  var fi2=((a12*gra[a2])+(b12*gra[b2])+(c12*gra[c2])+(d12*gra[d2])+(e12*gra[e2])+(f12*gra[f2])+(g12*gra[g2])+(h12*gra[h2])+(i12*gra[i2]));
				document.getElementById("showf2").innerHTML=fi2.toFixed(2);
				 
              
				
			}
			
			
	  
	  
	 
	   function get21(){
			       var inp21=document.getElementsByTagName("input");
			     for(var i=17;i<=26;i++){
				     if(inp21[i].value==""){
					     alert("Please Fill Up The 3RD Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
		var a21=document.getElementById("a21").innerHTML;
		var a221=document.getElementById("a221").value;
		var b21=document.getElementById("b21").innerHTML;
		var b221=document.getElementById("b221").value;
		var c21=document.getElementById("c21").innerHTML;
		var c221=document.getElementById("c221").value;
		var d21=document.getElementById("d21").innerHTML;
		var d221=document.getElementById("d221").value;
		var e21=document.getElementById("e21").innerHTML;
		var e221=document.getElementById("e221").value;
		var f21=document.getElementById("f21").innerHTML;
		var f221=document.getElementById("f221").value;
		var g21=document.getElementById("g21").innerHTML;
		var g221=document.getElementById("g221").value;
		var h21=document.getElementById("h21").innerHTML;
		var h221=document.getElementById("h221").value;
		var i21=document.getElementById("i21").innerHTML;
		var i221=document.getElementById("i221").value;
		var j21=document.getElementById("j21").innerHTML;
		var j221=document.getElementById("j221").value;
		
		var result21=((a21*gra[a221])+(b21*gra[b221])+(c21*gra[c221])+(d21*gra[d221])+(e21*gra[e221])+(f21*gra[f221])+(g21*gra[g221])+(h21*gra[h221])+(i21*gra[i221])+(j21*gra[j221]))/20;
			      document.getElementById("show21").innerHTML = result21.toFixed(2);
				  var fi21=((a21*gra[a221])+(b21*gra[b221])+(c21*gra[c221])+(d21*gra[d221])+(e21*gra[e221])+(f21*gra[f221])+(g21*gra[g221])+(h21*gra[h221])+(i21*gra[i221])+(j21*gra[j221]));
				  
				  
			      document.getElementById("showf21").innerHTML =fi21.toFixed(2);	
			}
	   function get22(){
			       var inp22=document.getElementsByTagName("input");
			     for(var i=27;i<=36;i++){
				     if(inp22[i].value==""){
					     alert("Please Fill Up The 4RD Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
		var a22=document.getElementById("a22").innerHTML;
		var a222=document.getElementById("a222").value;
		var b22=document.getElementById("b22").innerHTML;
		var b222=document.getElementById("b222").value;
		var c22=document.getElementById("c22").innerHTML;
		var c222=document.getElementById("c222").value;
		var d22=document.getElementById("d22").innerHTML;
		var d222=document.getElementById("d222").value;
		var e22=document.getElementById("e22").innerHTML;
		var e222=document.getElementById("e222").value;
		var f22=document.getElementById("f22").innerHTML;
		var f222=document.getElementById("f222").value;
		var g22=document.getElementById("g22").innerHTML;
		var g222=document.getElementById("g222").value;
		var h22=document.getElementById("h22").innerHTML;
		var h222=document.getElementById("h222").value;
		var i22=document.getElementById("i22").innerHTML;
		var i222=document.getElementById("i222").value;
		var j22=document.getElementById("j22").innerHTML;
		var j222=document.getElementById("j222").value;
		
		var result22=((a22*gra[a222])+(b22*gra[b222])+(c22*gra[c222])+(d22*gra[d222])+(e22*gra[e222])+(f22*gra[f222])+(g22*gra[g222])+(h22*gra[h222])+(i22*gra[i222])+(j22*gra[j222]))/21.5;
			      document.getElementById("show22").innerHTML = result22.toFixed(2);
				  
				  var fi22=((a22*gra[a222])+(b22*gra[b222])+(c22*gra[c222])+(d22*gra[d222])+(e22*gra[e222])+(f22*gra[f222])+(g22*gra[g222])+(h22*gra[h222])+(i22*gra[i222])+(j22*gra[j222]));
				  
			      document.getElementById("showf22").innerHTML = fi22.toFixed(2);
				
				 
              
				
			}
			
			
	  

	   function get31(){
			       var inp31=document.getElementsByTagName("input");
			     for(var i=37;i<=45;i++){
				     if(inp31[i].value==""){
					     alert("Please Fill Up The 5TH Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
		var a31=document.getElementById("a31").innerHTML;
		var a311=document.getElementById("a311").value;
		var b31=document.getElementById("b31").innerHTML;
		var b311=document.getElementById("b311").value;
		var c31=document.getElementById("c31").innerHTML;
		var c311=document.getElementById("c311").value;
		var d31=document.getElementById("d31").innerHTML;
		var d311=document.getElementById("d311").value;
		var e31=document.getElementById("e31").innerHTML;
		var e311=document.getElementById("e311").value;
		var f31=document.getElementById("f31").innerHTML;
		var f311=document.getElementById("f311").value;
		var g31=document.getElementById("g31").innerHTML;
		var g311=document.getElementById("g311").value;
		var h31=document.getElementById("h31").innerHTML;
		var h311=document.getElementById("h311").value;
		var i31=document.getElementById("i31").innerHTML;
		var i311=document.getElementById("i311").value;
		
		var result31=((a31*gra[a311])+(b31*gra[b311])+(c31*gra[c311])+(d31*gra[d311])+(e31*gra[e311])+(f31*gra[f311])+(g31*gra[g311])+(h31*gra[h311])+(i31*gra[i311]))/19;
			      document.getElementById("show31").innerHTML = result31.toFixed(2);
				  
				  var fi31=((a31*gra[a311])+(b31*gra[b311])+(c31*gra[c311])+(d31*gra[d311])+(e31*gra[e311])+(f31*gra[f311])+(g31*gra[g311])+(h31*gra[h311])+(i31*gra[i311]));
				  
			      document.getElementById("showf31").innerHTML = fi31.toFixed(2);
				
				 
              
				
			}
	   function get32(){
			       var inp32=document.getElementsByTagName("input");
			     for(var i=46;i<=56;i++){
				     if(inp32[i].value==""){
					     alert("Please Fill Up The 6TH Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
		var a32=document.getElementById("a32").innerHTML;
		var a321=document.getElementById("a321").value;
		var b32=document.getElementById("b32").innerHTML;
		var b321=document.getElementById("b321").value;
		var c32=document.getElementById("c32").innerHTML;
		var c321=document.getElementById("c321").value;
		var d32=document.getElementById("d32").innerHTML;
		var d321=document.getElementById("d321").value;
		var e32=document.getElementById("e32").innerHTML;
		var e321=document.getElementById("e321").value;
		var f32=document.getElementById("f32").innerHTML;
		var f321=document.getElementById("f321").value;
		var g32=document.getElementById("g32").innerHTML;
		var g321=document.getElementById("g321").value;
		var h32=document.getElementById("h32").innerHTML;
		var h321=document.getElementById("h321").value;
		var i32=document.getElementById("i32").innerHTML;
		var i321=document.getElementById("i321").value;
		var j32=document.getElementById("j32").innerHTML;
		var j321=document.getElementById("j321").value;
		var k32=document.getElementById("k32").innerHTML;
		var k321=document.getElementById("k321").value;
		
		var result32=((a32*gra[a321])+(b32*gra[b321])+(c32*gra[c321])+(d32*gra[d321])+(e32*gra[e321])+(f32*gra[f321])+(g32*gra[g321])+(h32*gra[h321])+(i32*gra[i321])+(j32*gra[j321])+(k32*gra[k321]))/20.5;
			      document.getElementById("show32").innerHTML = result32.toFixed(2);
				  
				  
				  var fi32=((a32*gra[a321])+(b32*gra[b321])+(c32*gra[c321])+(d32*gra[d321])+(e32*gra[e321])+(f32*gra[f321])+(g32*gra[g321])+(h32*gra[h321])+(i32*gra[i321])+(j32*gra[j321])+(k32*gra[k321]));
			      document.getElementById("showf32").innerHTML =fi32.toFixed(2);
				
				 
              
				
			}
	   function get41(){
			       var inp41=document.getElementsByTagName("input");
			     for(var i=57;i<=67;i++){
				     if(inp41[i].value==""){
					     alert("Please Fill Up The 7TH Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
		var a41=document.getElementById("a41").innerHTML;
		var a411=document.getElementById("a411").value;
		var b41=document.getElementById("b41").innerHTML;
		var b411=document.getElementById("b411").value;
		var c41=document.getElementById("c41").innerHTML;
		var c411=document.getElementById("c411").value;
		var d41=document.getElementById("d41").innerHTML;
		var d411=document.getElementById("d411").value;
		var e41=document.getElementById("e41").innerHTML;
		var e411=document.getElementById("e411").value;
		var f41=document.getElementById("f41").innerHTML;
		var f411=document.getElementById("f411").value;
		var g41=document.getElementById("g41").innerHTML;
		var g411=document.getElementById("g411").value;
		var h41=document.getElementById("h41").innerHTML;
		var h411=document.getElementById("h411").value;
		var i41=document.getElementById("i41").innerHTML;
		var i411=document.getElementById("i411").value;
		var j41=document.getElementById("j41").innerHTML;
		var j411=document.getElementById("j411").value;
		var k41=document.getElementById("k41").innerHTML;
		var k411=document.getElementById("k411").value;
		
		var result41=((a41*gra[a411])+(b41*gra[b411])+(c41*gra[c411])+(d41*gra[d411])+(e41*gra[e411])+(f41*gra[f411])+(g41*gra[g411])+(h41*gra[h411])+(i41*gra[i411])+(j41*gra[j411])+(k41*gra[k411]))/21;
			      document.getElementById("show41").innerHTML = result41.toFixed(2);
				  
				  var fi41=((a41*gra[a411])+(b41*gra[b411])+(c41*gra[c411])+(d41*gra[d411])+(e41*gra[e411])+(f41*gra[f411])+(g41*gra[g411])+(h41*gra[h411])+(i41*gra[i411])+(j41*gra[j411])+(k41*gra[k411]));
				  
			      document.getElementById("showf41").innerHTML = fi41.toFixed(2);
				
				 
              
				
			}
	   function get42(){
			       var inp42=document.getElementsByTagName("input");
			     for(var i=68;i<=77;i++){
				     if(inp42[i].value==""){
					     alert("Please Fill Up The 8TH Semester Box By The Your Grade Points");
					 return false; 
					 
				 }
				
				 }
		var a42=document.getElementById("a42").innerHTML;
		var a421=document.getElementById("a421").value;
		var b42=document.getElementById("b42").innerHTML;
		var b421=document.getElementById("b421").value;
		var c42=document.getElementById("c42").innerHTML;
		var c421=document.getElementById("c421").value;
		var d42=document.getElementById("d42").innerHTML;
		var d421=document.getElementById("d421").value;
		var e42=document.getElementById("e42").innerHTML;
		var e421=document.getElementById("e421").value;
		var f42=document.getElementById("f42").innerHTML;
		var f421=document.getElementById("f421").value;
		var g42=document.getElementById("g42").innerHTML;
		var g421=document.getElementById("g421").value;
		var h42=document.getElementById("h42").innerHTML;
		var h421=document.getElementById("h421").value;
		var i42=document.getElementById("i42").innerHTML;
		var i421=document.getElementById("i421").value;
		var j42=document.getElementById("j42").innerHTML;
		var j421=document.getElementById("j421").value;
		
		var result42=((a42*gra[a421])+(b42*gra[b421])+(c42*gra[c421])+(d42*gra[d421])+(e42*gra[e421])+(f42*gra[f421])+(g42*gra[g421])+(h42*gra[h421])+(i42*gra[i421])+(j42*gra[j421]))/20;
			      document.getElementById("show42").innerHTML = result42.toFixed(2);
				  
				 var fi42=((a42*gra[a421])+(b42*gra[b421])+(c42*gra[c421])+(d42*gra[d421])+(e42*gra[e421])+(f42*gra[f421])+(g42*gra[g421])+(h42*gra[h421])+(i42*gra[i421])+(j42*gra[j421])); 
			      document.getElementById("showf42").innerHTML = fi42.toFixed(2);
				
				 
              
				
			}
			
		
				 function getc(){
				               
				       
						  	  var s1=document.getElementById("showf").innerHTML;
						  	  var s2=document.getElementById("showf2").innerHTML;
						  	  var s3=document.getElementById("showf21").innerHTML;
						  	  var s4=document.getElementById("showf22").innerHTML;
						  	  var s5=document.getElementById("showf31").innerHTML;
						  	  var s6=document.getElementById("showf32").innerHTML;
						  	  var s7=document.getElementById("showf41").innerHTML;
						  	  var s8=document.getElementById("showf42").innerHTML;
						  	
							  document.getElementById("showc").innerHTML=((parseFloat(s1)+parseFloat(s2)+parseFloat(s3)+parseFloat(s4)+parseFloat(s5)+parseFloat(s6)+parseFloat(s7)+parseFloat(s8))/160).toFixed(2);
							  
							}
							
	  		    
						
						