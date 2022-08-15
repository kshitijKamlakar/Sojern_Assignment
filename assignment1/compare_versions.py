import traceback

def compare_version(version1, version2):

    try :
        version1 = version1.split('.')
        version2 = version2.split('.')
        len_version1= len(version1)
        len_version2= len(version2)    
        count = min(len_version1,len_version2)

        for i in range(count):
            if version1[i] > version2[i]:
                return 1
            elif version2 > version1 :
                return -1

        if len_version1 > len_version2:
            return 1 
        elif len_version2 > len_version1 :
            return -1
        return 0

    except Exception :
        traceback.print_exc()
