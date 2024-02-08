#The ThinkScript language is embedded in Thinkorswim trading platform owned by TD Ameritrade. Below is a simple buy/sell script example with comments explaining what each part of code performs. 

#This script provides a buy signal when 50 days SMA crosses over 200 days SMA and a sell signal when 50 days SMA crosses below 200 days SMA.

#Please note that this script should be used for study purposes only, and does not guarantee winning trades.

# Declare Lower so the plots appear in the lower section of the graph
declare lower;

# Define shorter moving average. SMA=SimpleMovingAvg
def smaShortTerm = Average(close, 50);
plot ShortLine = smaShortTerm;

ShortLine.SetDefaultColor(GetColor(1));  # Setting color to 1 i.e. cyan
ShortLine.SetPaintingStrategy(PaintingStrategy.LINE);

# Define longer moving average
def smaLongTerm = Average(close, 200);
plot LongLine = smaLongTerm;

LongLine.SetDefaultColor(GetColor(0));   # Setting color to 0 i.e. yellow
LongLine.SetPaintingStrategy(PaintingStrategy.LINE);

# Create a Buy signal when the shorter term SMA crosses above the longer term SMA
plot Buy_Signal = Crosses(smaShortTerm, smaLongTerm, CrossingDirection.Above);
Buy_Signal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
Buy_Signal.SetDefaultColor(Color.UPTICK);
Buy_Signal.SetLineWeight(1);

# Create a Sell signal when the shorter term SMA crosses below the longer term SMA
plot Sell_Signal = Crosses(smaShortTerm, smaLongTerm, CrossingDirection.Below);
Sell_Signal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
Sell_Signal.SetDefaultColor(Color.DOWNTICK);
Sell_Signal.SetLineWeight(1);

#This is a basic buy or sell indicator script based on the cross between a short term and long term moving average. Be aware that this only provides an indication and that real life trading should consider more factors than just two SMA lines crossing. Always perform proper research and risk management.
