import fire



class Calculator(object):
    """Simple calculator program"""

    def add(self,number_1,number_2):
        """Add numbers"""
        return number_1 + number_2

    def subtract(self,number_1,number_2):
        return number_1 - number_2

    def divide(self,number_1,number_2):
        return number_1 / number_2

    def multiply(self,number_1,number_2):
        return number_1 * number_2
    

if __name__ == '__main__':
  fire.Fire(Calculator)