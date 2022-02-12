
#getting the size of the board
board = ["-", "-", "-", 
        "-", "-", "-", 
        "-", "-", "-", ]

#displaying the board
def display_board():
        print(board[0] + " | " + board[1] + " | " + board[2])
        print(board[3] + " | " + board[4] + " | " + board[5])
        print(board[6] + " | " + board[7] + " | " + board[8])

def play_turn():
        x = int(input(f"what is player {turn}`s x position? "))
        o = int(input(f"what is player {turn}`s o position? "))

        try:
            if board [x, o] == 0:
                board [x, o] == turn

            else: 
              play-turn()

        else: indexError
        play_turn

turn = 1
move = 9

while move > 0:
  print(board)
  play_turn()

  if win():
    print(f"congs!!!!.. player {turn} has won")
    break

                 
        