-- Sample Medicine data
INSERT INTO medicine (name, batch_no, expiry_date, quantity, price) VALUES
('Paracetamol 500mg', 'BATCH001', '2025-12-31', 100, 2.50),
('Amoxicillin 250mg', 'BATCH002', '2025-06-30', 50, 15.75),
('Aspirin 75mg', 'BATCH003', '2025-09-15', 75, 1.25),
('Metformin 500mg', 'BATCH004', '2025-11-20', 30, 8.90),
('Omeprazole 20mg', 'BATCH005', '2025-08-10', 40, 12.50);

-- Sample Sale data
INSERT INTO sale (sale_date, total_amount, cashier) VALUES
('2025-01-15 10:30:00', 25.00, 'admin'),
('2025-01-16 14:20:00', 45.50, 'admin'),
('2025-02-10 09:15:00', 18.75, 'admin'),
('2025-02-15 16:45:00', 32.25, 'admin'),
('2025-03-05 11:30:00', 28.90, 'admin');
