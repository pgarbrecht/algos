# 3. Write a function named occurrences() that takes two string parameters and counts the number of occurrences of the second string inside the first string. For example:
# occurences('fleep floop', 'e')   # returns 2
# occurences('fleep floop', 'p')   # returns 2
# occurences('fleep floop', 'ee')  # returns 1
# occurences('fleep floop', 'fe')  # returns 0
# occurences('mississippi', 'ss')  # returns 2

def occurrences(string1, string2):
    # create a number variable to store answer
    number = 0
    #if string 2 is 1 letter long
    if(len(string2) == 1):
        #then loop over string 1 letters
        for letter in string1: 
            #and if letter equals string 2 letter
            if(letter == string2):
                #increase our number answer
                number +=1
    #else if string 2 is more than 1 letter long,
    elif(len(string2) > 1):
        # if string 1 contains string 2,
        if(string1.__contains__(string2)):
            #then increase our number answer by how many times string1 contains string2
            number += string1.count(string2)
    # print the answer
    print(number)

#test cases provided below - check console for answers
occurrences('fleep floop', 'e') 
occurrences('fleep floop', 'p')
occurrences('fleep floop', 'ee')
occurrences('fleep floop', 'fe') 
occurrences('mississippi', 'ss')
