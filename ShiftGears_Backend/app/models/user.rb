class User < ApplicationRecord
    has_many :orders
    has_many :order_gears, through :orders
end
