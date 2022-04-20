codes = {};
pat = '';
tree = [];

function textHuffmanUndo(){
	const cypher = document.getElementById('message_box');
	decoded = decode(tree, cypher.value);  
	document.getElementById('message_box').value = decoded;
}

function textHuffman() {
	const message = document.getElementById('message_box');
	
	
	tree = buildTree(sortPairs(countEachLetter(message.value)));
	assignCode(tree, pat);


	encoded = encode(message.value);
	document.getElementById('message_box').value = encoded;
}

function countEachLetter(inText){
	var lettersCount = {};

	for (var i in inText){
		//{a:8, r:0} return arr['a'] => 9

		if(lettersCount[inText[i]] == undefined){
			lettersCount[inText[i]] = 1;
		}
		else {
			lettersCount[inText[i]] += 1;
		}
	}

	return lettersCount;
}

function sortPairs(lettersCount){
	var sortedLettersCount = [];

	for (var i in lettersCount){
		//Fill array with 'digit+letter' pairs [8a, 0r]

		sortedLettersCount.push([lettersCount[i], i]);
	}

	return sortedLettersCount.sort();
}

function buildTree(pairs){  
    while(pairs.length > 1){  
	    leastTwo = [pairs[0][1], pairs[1][1]];  
	    theRest = pairs.slice(2, pairs.length);  
	    combFreq = pairs[0][0] + pairs[1][0];   
	    pairs = theRest;  
	    end = [combFreq, leastTwo];  
	    pairs.push(end);    
	    pairs.sort();    
    }  

    return pairs[0][1];  
}

function assignCode(treeNode, pat){
	//Esli eto leaf to stopaem process, v drugih slovah base case  
    if(typeof(treeNode) == typeof(""))  
        codes[treeNode] = pat;  
    else{  
        assignCode(treeNode[0], pat + '0');  
        assignCode(treeNode[1], pat + '1');  
   	}  
}

function encode(string){  
    output = '';  
    for(var s in string){  
       	output += codes[string[s]];
    }  

    return output;  
}

function decode(tree, encoded){  
    output = '';  
    p =  tree;  

    for(var bit in encoded){  
        if(encoded[bit]=='0')  
            p = p[0];  
        
        else  
            p = p[1];  

        if(typeof(p)==typeof('')){  
          output += p;  
          p = tree;  
        }  
    } 

	return output;  
} 
