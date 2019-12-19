package com.example.model;

import org.hibernate.criterion.Order;

import javax.persistence.*;
import java.io.Serializable;
/*
промежуточная таблица
соединила как many to many, но не получилось создать дополнительный столбец
нужно доделать
 */
@Entity
@IdClass(value=OrderDish.OrderDishId.class)
@Table(name = "order_dish")
public class OrderDish implements Serializable {
    private int orderID;
    private int dishID;


    public OrderDish(int orderID, int dishID){
        this.orderID = orderID;
        this.dishID = dishID;

    }

    public OrderDish() {

    }
/*
    @EmbeddedId
    OrderDishPK orderdishpk = new OrderDishPK();

    @Column(name = "quantity")
    private int quantity;
//add orderdishpk
    public OrderDish(int orderID, int dishID, int quantity) {
        this.orderdishpk.setOrderid(orderID);
        this.orderdishpk.setDishid(dishID);// orderdishpk.orderid
        this.quantity = quantity;

    }

    public OrderDish(){}

    *//*@Id
    @Column(name = "orderid")
    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }
    @Id
    @Column(name = "dishid")
    public int getDishID() {
        return dishID;
    }

    public void setDishID(int dishID) {
        this.dishID = dishID;
    }
    *//*

        @ManyToOne
        @MapsId("orderid")
        @JoinColumn(name = "orderid")
        private Orders orders;

        @ManyToOne
        @MapsId("dishid")
        @JoinColumn(name = "dishid")
        private Dish dish;

        public Orders getOrders() {
            return orders;
        }

        public void setOrders(Orders orders) {
            this.orders = orders;
        }

        public Dish getDish() {
            return dish;
        }

        public void setDish(Dish dish) {
            this.dish = dish;
        }

        public int getQuantity() {
            return quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }*/

        @Id
        @Column(name = "orderid")
        public int getOrderID() {
            return orderID;
        }

        public void setOrderID(int orderID) {
            this.orderID = orderID;
        }

        @Id
        @Column(name = "dishid")
        public int getDishID() {
            return dishID;
        }

        public void setDishID(int dishID) {
            this.dishID = dishID;
        }


static class OrderDishId implements Serializable {
    private int orderID;
    private int dishID;

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public int getDishID() {
        return dishID;
    }

    public void setDishID(int dishID) {
        this.dishID = dishID;
    }
}
}
