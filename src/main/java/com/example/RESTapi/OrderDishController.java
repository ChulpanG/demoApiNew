package com.example.RESTapi;

import com.example.exception.ResourceNotFoundException;
import com.example.model.OrderDish;
import com.example.repository.OrderDishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/*
Контроллер промежуточной таблицы order_dish
проверки не было, связи не устанавливала
нужно доделать
 */
@RestController
@RequestMapping(path = "/orderDish")
public class OrderDishController {
    @Autowired
    private OrderDishRepository orderDishRepository;

    @GetMapping()
    public @ResponseBody Iterable<OrderDish> getAllOrderDish() {
        return orderDishRepository.findAll();
    }

    @GetMapping("/dish")
    public OrderDish getDishById(@RequestParam(value = "orderID") int orderID, @RequestParam(value = "dishID") int dishID)//RequestParam orderid dishid
            throws ResourceNotFoundException {
        //OrderDishPK orderDishPK = new OrderDishPK();
        //orderDishPK.setDishid(orderID);
        //orderDishPK.setOrderid(orderID);
        //Optional<OrderDish> orderDish = orderDishRepository.findById(orderDishPK.getOrderid());
        OrderDish orderDish = new OrderDish();
        return orderDish;
    }

    //(@RequestParam(value = "orderID") int orderID, @RequestParam(value = "dishID") int dishID)
    @PostMapping("{orderID}")
    public ResponseEntity<OrderDish> createOrderDish(@PathVariable(value = "orderID") int orderID,
                                                         @Valid @RequestBody OrderDish orderDishDetails){
        OrderDish orderdish = new OrderDish();
        orderdish.setOrderID(orderID);
        orderdish.setDishID(orderDishDetails.getDishID());

        final OrderDish updatedProduct = orderDishRepository.save(orderdish);
        return ResponseEntity.ok(updatedProduct);
    }

    @PutMapping()
    public ResponseEntity<OrderDish> updateOrderDish(@RequestParam(value = "orderID") int orderID,
                                                         @RequestParam(value = "dishID") int dishID,
                                                            @RequestParam(value = "quantity") int quantity ) throws ResourceNotFoundException {
        //OrderDishPK orderDishPK = orderDishPKRepository.findById(orderID,dishID);
        //OrderDish orderDish = orderDishRepository.findById(orderDishPK.getOrderid())
            //    .orElseThrow(() -> new ResourceNotFoundException("OrderDish not found for this id :: " + orderID));

       // orderDish.setQuantity(quantity);
       // orderDishPK.setDishid(dishID);
       // orderDishPK.setOrderid(orderID);
       // orderDish.setOrderdishpk(orderDishPK);
        //orderDish.(orderDishDetails.getDishID());
       // orderDish.setQuantity(orderDishDetails.getQuantity());
        OrderDish orderDish = new OrderDish();
        final OrderDish updatedOrderDish = orderDishRepository.save(orderDish);
        return ResponseEntity.ok(updatedOrderDish);
    }

    @DeleteMapping("{orderID}")
    public Map<String, Boolean> deleteOrderDish(@PathVariable(value = "orderID") int orderID)
            throws ResourceNotFoundException {
        OrderDish orderDish = orderDishRepository.findById(orderID)
                .orElseThrow(() -> new ResourceNotFoundException("OrderDish not found for this id :: " + orderID));

        orderDishRepository.delete(orderDish);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

