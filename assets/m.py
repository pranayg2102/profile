import turtle

def draw_circle(radius):
    # Create a turtle object
    t = turtle.Turtle()
    
    # Set the speed of the turtle
    t.speed(10)  # 0 means fastest speed
    
    # Draw the circle
    t.circle(radius)
    
    # Keep the window open until it's closed by the user
    turtle.mainloop()

# Example usage:
radius = 100
draw_circle(radius)
