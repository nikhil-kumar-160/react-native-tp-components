const IMG_DIRECTORY = '../../assets/images/';
const EXPENSE_DIRECTORY = '../../assets/images/expense/';
const TRIP_DIRECTORY = '../../assets/images/tripCard/';

export default {
  fabCredits: require(IMG_DIRECTORY + 'fab_credits.png'),
  couponGreen: require(IMG_DIRECTORY + 'coupon_green.png'),
  rupees: require(IMG_DIRECTORY + 'rupees.png'),
  scanReceipt: require(IMG_DIRECTORY + 'scan_receipt.png'),
  typeDetails: require(IMG_DIRECTORY + 'type_details.png'),
  logDistance: require(IMG_DIRECTORY + 'log_distance.png'),

  // Expense
  food: require(EXPENSE_DIRECTORY + 'food.png'),
  hotels: require(EXPENSE_DIRECTORY + 'hotels.png'),
  bills: require(EXPENSE_DIRECTORY + 'bills.png'),
  localTravel: require(EXPENSE_DIRECTORY + 'localTravel.png'),
  outstationTravel: require(EXPENSE_DIRECTORY + 'travel.png'),
  other: require(EXPENSE_DIRECTORY + 'other.png'),
  confirmation: require(EXPENSE_DIRECTORY + 'confirmation.png'),
  car: require(EXPENSE_DIRECTORY + 'car.png'),
  motorcycle: require(EXPENSE_DIRECTORY + 'motorcycle.png'),
  emptylist: require(EXPENSE_DIRECTORY + 'emptylist.png'),
  emptyClaims: require(EXPENSE_DIRECTORY + 'emptyClaims.png'),
  emptyApprovals: require(EXPENSE_DIRECTORY + 'emptyApprovals.png'),

  // Trip card
  calendar: require(TRIP_DIRECTORY + 'calendar.png'),
  hotel: require(TRIP_DIRECTORY + 'hotel.png'),
  coTravelers: require(TRIP_DIRECTORY + 'cotravelers.png'),
};
