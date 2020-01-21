class Order < ApplicationRecord
    belongs_to :user
    has_many :order_gears
    has_many :gears, through :order_gears
end
