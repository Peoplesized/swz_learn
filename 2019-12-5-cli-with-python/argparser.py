
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