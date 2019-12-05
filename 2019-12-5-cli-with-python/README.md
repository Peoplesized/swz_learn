# CLI with python

- The are varied Python tools that enable the creation of CLI application, for a start we explored two technologies mainly:

  • Argparser - A CLI app builder that comes with the Python Standard library.

  - The idea around `argparser` is that the CLI app creater should simple define the expected arguments and also define the functions that will execute the task.

  • Fire - is a Python module that enables the creation of CLI apps, unlike argparser it does not come with the python standard therefore it needs to be installed.

  - The idea around `fire` is that build a CLI app for an existing program should be easy, to transfrom a program to be a CLI app fire requires as little overhead as possible. This makes it easier to build CLI apps which interact with other modules.

## Sample CLI programs written with argparser and fire.

### Argparser

```python

def prod(iterable):
    result = 1
    for n in iterable:
        result *= n
    return result


parser = argparse.ArgumentParser(description='Multiply some integers.')
parser.add_argument('integers', metavar='N', type=int, nargs='*',
                    help='an integer for the accumulator')
parser.add_argument('--product', dest='accumulate', action='store_const',
                    const=prod, default=max,
                    help='Multiply the integers (default: find the max)')

args = parser.parse_args()
print(args.accumulate(args.integers))
```

- Argparser starts by creating the executing function.
- Then creates a parser.
- The positional arguments accepted are specified using the parser.
- The above program is executed as follows in the CLI

    ```
        python prog.py  1 2 --product

        2
    ```


### Fire

```python
import fire



class Calculator(object):
    """Simple calculator program"""

    def add(self,number_1,number_2):
        """Add numbers"""
        return number_1 + number_2

if __name__ == '__main__':
    fire.Fire(Calculator)
```

- The above program takes an existing Calculator class and turns into a cli app that accepts two positional arguments.

- the above program can be executed on the cli as follows

  ```bash
      python3 fire.py add  --number_1=2 --number=3

      5
  ```


## Other useful tools

• [Gooey](https://github.com/chriskiehl/Gooey) - Turns CLI programs into GUI apps 

• [Click](https://click.palletsprojects.com/) - Turns python program to a CLI app.
