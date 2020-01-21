class Gear < ApplicationRecord
    has_many :order_gears
    has_many :orders, through: :order_gears
end
